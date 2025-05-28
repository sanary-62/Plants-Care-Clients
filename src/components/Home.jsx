import React from "react";
import { useLoaderData } from "react-router-dom";

import PlantCard from "./PlantCard";
import Hero from "./Hero";
import CareTips from "./CareTips";
import SeasonalFavorites from "./SeasonalFavorites";
const Home = () => {
  const plants = useLoaderData();
  return (
    <div>
      <Hero />
      <h1 className="text-3xl font-bold text-center my-6 text-green-800">
        🌿 Featured Plants 🌿
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {plants.map((plant) => (
          <PlantCard key={plant._id} plant={plant}></PlantCard>
        ))}
      </div>
      <CareTips />
      <SeasonalFavorites />
    </div>
  );
};

export default Home;