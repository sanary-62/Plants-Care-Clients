import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PlantCard from "./PlantCard";

const PlantCardPage = () => {
  const plants = useLoaderData();
  const [sortedPlants, setSortedPlants] = useState(plants);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let sorted = [...plants];

    if (sortOption === "nextWateringDate") {
      sorted.sort(
        (a, b) => new Date(a.nextWateringDate) - new Date(b.nextWateringDate)
      );
    } else if (sortOption === "careLevel") {
      const carePriority = {
        "low maintenance": 1,
        "routine care": 2,
        "high attention": 3,
      };
      sorted.sort(
        (a, b) => carePriority[a.careLevel] - carePriority[b.careLevel]
      );
    }

    setSortedPlants(sorted);
  }, [sortOption, plants]);

  return (
    <div className="p-6 mt-28">
      <h1 className="text-3xl font-bold text-center my-6 text-green-800">
        🌿 All Plant Cards 🌿
      </h1>

      {/* Sorting UI */}
      <div className="text-center mb-6">
        <label className="text-lg font-medium mr-2">Sort By:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered"
        >
          <option value="">Default</option>
          <option value="nextWateringDate">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedPlants.map((plant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantCardPage;
