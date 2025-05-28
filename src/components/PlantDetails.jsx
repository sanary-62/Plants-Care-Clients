import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const useAuth = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return { user };
};

const PlantDetails = () => {
  const { id } = useParams();

  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/plants/${id}`);

        if (!response.ok) throw new Error("Failed to fetch plant data");
        const data = await response.json();
        setPlant(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;
  if (!plant)
    return <div className="p-6 text-center">No plant data found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-28">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={plant.image || "https://via.placeholder.com/120"}
          alt={plant.plantName || "Plant image"}
          className="w-32 h-32 object-cover rounded-full border-4 border-orange-600"
        />
        <div>
          <h1 className="text-3xl font-bold text-green-700">
            {plant.plantName}
          </h1>
          <p className="text-gray-600 italic">{plant.category}</p>
          <p className="text-gray-500 text-sm mt-1">
            ID: {plant._id || plant.id}
          </p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-1">Description</h3>
          <p>{plant.description || "No description provided."}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Care Instructions</h3>
          <ul className="list-disc list-inside">
            {plant.careInstructions && plant.careInstructions.length > 0 ? (
              plant.careInstructions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))
            ) : (
              <li>No care instructions available.</li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Additional Info</h3>
          <p>
            <strong>Watering Frequency:</strong>{" "}
            {plant.wateringFrequency || "Unknown"}
          </p>
          <p>
            <strong>Last Watered:</strong> {plant.lastWateredDate || "Unknown"}
          </p>
          <p>
            <strong>Next Watering:</strong>{" "}
            {plant.nextWateringDate || "Unknown"}
          </p>
          <p>
            <strong>Health:</strong> {plant.healthStatus || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
