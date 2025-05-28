import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdatePlant = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const {
    image,
    plantName,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userEmail,
    userName,
  } = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:3000/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData({ ...data, _id: data._id }))
      .catch((error) => console.error("Error fetching plant:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { _id, ...updateData } = formData;

      const response = await fetch(`http://localhost:3000/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const text = await response.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
        console.log("Parsed JSON:", data);
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        Swal.fire("Error", "Received invalid JSON from server", "error");
        return;
      }

      if (
        response.ok &&
        (data.modifiedCount > 0 || data.acknowledged || data.success)
      ) {
        Swal.fire({
          title: "Plant Updated Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire("Error", "Failed to update plant", "error");
    }
  };

  if (!formData)
    return <p className="p-10 text-center">Loading plant data...</p>;

  return (
    <div
      className="p-14 md:p-24 min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("https://i.postimg.cc/44bFBxYG/plant-bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="p-12 text-center space-y-4">
        <h1 className="text-3xl md:text-6xl text-green-700 font-semibold mb-6">
          Update Plant
        </h1>
        <p className="md:text-xl text-sm">
          Update plant information to keep your garden log accurate and
          up-to-date.
        </p>
      </div>

      <form onSubmit={handleUpdate}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Image URL</label>
          <input
            type="text"
            name="image"
            className="input w-full"
            defaultValue={image}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Plant Name</label>
          <input
            type="text"
            name="plantName"
            className="input w-full"
            defaultValue={plantName}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Category</label>
          <input
            type="text"
            name="category"
            className="input w-full"
            defaultValue={category}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            className="input w-full"
            defaultValue={description}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Care Level</label>
          <input
            type="text"
            name="careLevel"
            className="input w-full"
            defaultValue={careLevel}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            className="input w-full"
            defaultValue={wateringFrequency}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Last Watered Date</label>
          <input
            type="date"
            name="lastWateredDate"
            className="input w-full"
            defaultValue={lastWateredDate}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Next Watering Date</label>
          <input
            type="date"
            name="nextWateringDate"
            className="input w-full"
            defaultValue={nextWateringDate}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            className="input w-full"
            defaultValue={healthStatus}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">User Email</label>
          <input
            type="email"
            name="userEmail"
            className="input w-full"
            defaultValue={userEmail}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">User Name</label>
          <input
            type="text"
            name="userName"
            className="input w-full"
            defaultValue={userName}
            onChange={handleChange}
            required
          />
        </fieldset>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="btn btn-success bg-green-800 text-white px-8 rounded-2xl w-full"
          >
            Update Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePlant;
