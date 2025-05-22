import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from './PlantCard';

const Home = () => {
    const plants = useLoaderData();
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
            {
                plants.map(plant => <PlantCard key={plant._id} plant={plant}></PlantCard>)
            }
            </div> 
        </div>
    );
};

export default Home;