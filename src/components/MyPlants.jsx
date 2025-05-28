import { useNavigate } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    console.log("Current user:", user);
    if (user?.email) {
      fetch(`http://localhost:3000/plants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched plants:", data);
          setMyPlants(data);
        });
    }
  }, [user]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.success) {
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
              setMyPlants((prevPlants) =>
                prevPlants.filter((plant) => plant._id !== id)
              );
            } else {
              Swal.fire(
                "Error",
                data.message || "Failed to delete plant",
                "error"
              );
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-green-700">My Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myPlants.map((plant) => (
          <div key={plant._id} className="border p-4 rounded shadow">
            <img
              src={
                plant.image && typeof plant.image === "string"
                  ? plant.image
                  : plant.image instanceof Blob
                  ? URL.createObjectURL(plant.image)
                  : "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={plant.plantName}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold">{plant.plantName}</h3>
            <p className="text-sm text-gray-600">{plant.description}</p>
            <div className="flex justify-between mt-4">
              <button
                className="btn btn-warning btn-sm bg-green-800"
                onClick={() => navigate(`/updatePlant/${plant._id}`)}
              >
                Update
              </button>
              <button
                className="btn btn-error btn-sm bg-red-800"
                onClick={() => handleDelete(plant._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
