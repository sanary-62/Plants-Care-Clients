// import React from 'react';
// import { Link } from 'react-router';

// const PlantCard = ({plant}) => {
//     const { image: photo ,plantName,category, description} = plant;

//     return (
//          <div className="card bg-base-100 w-96 shadow-sm">
//   <figure className="px-10 pt-10">
//     <img
//       src={photo}
//       alt="Shoes"
//       className="rounded-xl h-60 w-60" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{plantName}</h2>
// <h4 className='text-sm'>{category}</h4>
//     <p>{description}</p>
//     <div className="card-actions">
//         <Link to={`/plant/${_id}`}>
//         <button className="btn btn-primary bg-green-800">View Details</button>
//         </Link>
      
//     </div>
//   </div>
// </div>

//     );
// };

// export default PlantCard;














import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
  const { _id, image: photo, plantName, category, description } = plant;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Plant"
          className="rounded-xl h-60 w-60"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{plantName}</h2>
        <h4 className="text-sm">{category}</h4>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/plant/${_id}`}>
            <button className="btn btn-primary bg-green-800">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
