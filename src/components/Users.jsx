import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const initialUsers = useLoaderData ();
    const [users,setUsers] = useState(initialUsers);
    return (
        <div style={{
        backgroundImage: `url("https://i.postimg.cc/44bFBxYG/plant-bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}>
            <h2 className='text-3xl'>Users: {initialUsers?.length || 0}</h2>


           
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row */}
      {
        users.map((user,index) => <tr key={user._id}>
        <th>
          <div className=" text-orange-700">
            {index +1}
          </div>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={user.photoURL} alt="" />

              </div>
            </div>
            <div>
              <div className="font-bold text-orange-700">{user.name}</div>
             
            </div>
          </div>
        </td>
        <td>
          <div className='text-orange-700'>
            {user.email}
          </div>
          
        </td>
        <td>Purple</td>
        <th>
          <button className="btn text-white bg-green-800  btn-xs">details</button>
        </th>
      </tr>)
      }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;