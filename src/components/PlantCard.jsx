import React from 'react';

const PlantCard = ({plant}) => {
    const { image: photo ,plantName, description} = plant;

    return (
         <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl h-60 w-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{plantName}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-green-800">View Details</button>
    </div>
  </div>
</div>

    );
};

export default PlantCard;