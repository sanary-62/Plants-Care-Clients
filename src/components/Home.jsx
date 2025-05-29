import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PlantCard from "./PlantCard";
import Hero from "./Hero";
import CareTips from "./CareTips";
import SeasonalFavorites from "./SeasonalFavorites";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const Icon = theme === "light" ? FaMoon : FaSun;
  const plants = useLoaderData();

  return (
    <div
      className="min-h-screen dark:bg-[#2C2C2C] dark:text-[#E4E4E4] w-full mt-7"
      data-theme={theme}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="pb-5 flex justify-end">
          <button
            onClick={handleToggleTheme}
            className="cursor-pointer dark:bg-[#334155] p-2 rounded-full dark:text-yellow-400 bg-[#2C2C2C]/70 text-white hover:bg-[#2C2C2C]"
          >
            <Icon size={22} />
          </button>
        </div>

        <Hero />

        <h1 className="text-2xl sm:text-3xl font-bold text-center my-6 text-green-800 dark:text-green-300">
          🌿 Featured Plants 🌿
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant}></PlantCard>
          ))}
        </div>

        <div className="mt-10">
          <CareTips />
        </div>

        <div className="mt-10">
          <SeasonalFavorites />
        </div>
      </div>
    </div>
  );
};

export default Home;
