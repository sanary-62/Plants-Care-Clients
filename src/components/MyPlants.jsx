import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const navigate = useNavigate();

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
    <div className="mt-16 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700 text-center md:text-left">
        My Plants
      </h2>

      {myPlants.length === 0 ? (
        <p className="text-center text-gray-600">No plants added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPlants.map((plant) => (
            <div
              key={plant._id}
              className="border p-4 rounded-xl shadow-md bg-white dark:bg-gray-800"
            >
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
              <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-1">
                {plant.plantName}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {plant.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                <button
                  className="btn btn-warning btn-sm bg-green-800 text-white w-full sm:w-auto"
                  onClick={() => navigate(`/updatePlant/${plant._id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-error btn-sm bg-red-700 text-white w-full sm:w-auto"
                  onClick={() => handleDelete(plant._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
