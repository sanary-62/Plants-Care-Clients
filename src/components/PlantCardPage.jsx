import React from "react";
import { useLoaderData } from "react-router-dom";
import PlantCard from "./PlantCard";

const PlantCardPage = () => {
  const plants = useLoaderData();

  return (
    <div className="p-6 mt-28">
      <h1 className="text-3xl font-bold text-center my-6 text-green-800">
        🌿 All Plant Cards 🌿
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantCardPage;
