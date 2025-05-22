import React, { useState } from "react";
import Swal from "sweetalert2";

const AddPlant = () => {
  const [formData, setFormData] = useState({
    image: "",
    plantName: "",
    category: "",
    description: "",
    careLevel: "",
    wateringFrequency: "",
    lastWateredDate: "",
    nextWateringDate: "",
    healthStatus: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddPlant = async (e) => {
    e.preventDefault();

    // Simulating DB call
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    //send plant data to the db
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result?.insertedId)
 {
          Swal.fire({
            title: "Plant Added Successfully",
            icon: "success",
            draggable: true,
          });
          e.target.reset();

        }
      });

  };

  return (
    <div
      className="p-14 md:p-24"
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
          Add New Plant
        </h1>
        <p className="md:text-xl text-sm">
          Users can enter plant information, upload photos, and assign
          categories, creating a personalized garden log that simplifies
          tracking growth, care schedules, and species types in a visually
          organized manner
        </p>
      </div>

      <form onSubmit={handleAddPlant}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-6">
          <label className="label">Image</label>
          <input
            type="file"
            name="image"
            className="input w-full"
            onChange={handleChange}
            required
          />
        </fieldset>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Plant Name</label>
            <input
              type="text"
              name="plantName"
              className="input w-full"
              placeholder="Aloe Vera"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select
              name="category"
              className="input w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="herbs">Herbs</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetable</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Short description"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Care Level</label>
            <select
              name="careLevel"
              className="input w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Care Level</option>
              <option value="low maintenance">Low Maintenance</option>
              <option value="routine care">Routine Care</option>
              <option value="high attention">High Attention</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              className="input w-full"
              placeholder="Every 3 days"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
              className="input w-full"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
              className="input w-full"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              className="input w-full"
              placeholder="Healthy / Needs attention"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              name="userEmail"
              className="input w-full"
              placeholder="user@example.com"
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              name="userName"
              className="input w-full"
              placeholder="John Doe"
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="btn btn-success bg-green-800 text-white px-8 rounded-2xl w-full"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
