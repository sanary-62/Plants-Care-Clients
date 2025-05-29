import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
  if (!plant) return null;

  const {
    _id,
    image: photo,
    plantName,
    category,
    description,
    wateringFrequency,
  } = plant;

  return (
    <div className="card bg-base-100 shadow-sm w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <figure className="px-6 pt-6">
        <img
          src={photo}
          alt="Plant"
          className="rounded-xl object-cover w-full h-48 sm:h-60"
        />
      </figure>
      <div className="card-body items-center text-center px-4 py-6">
        <h2 className="card-title text-lg sm:text-xl font-semibold">
          {plantName}
        </h2>
        <h4 className="text-sm text-gray-600 dark:text-gray-400">{category}</h4>
        <h4 className="text-xs text-gray-500 dark:text-gray-300">
          Watering: {wateringFrequency}
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          {description}
        </p>
        <div className="card-actions mt-4">
          <Link to={`/plantDetails/${_id}`}>
            <button className="btn btn-primary bg-green-800 border-none px-4 py-2 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
