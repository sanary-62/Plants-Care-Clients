import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import AddPlant from './components/AddPlant';
import PlantDetails from './components/PlantDetails';
import UpdatePlant from './components/UpdatePlant';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AuthProvider from './contexts/AuthProvider';
import Users from './components/Users';
import MyPlants from "./components/MyPlants";
import PrivateRoute from "./components/PrivateRoute";
import PlantCard from './components/PlantCard';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true,
        loader: () => fetch('http://localhost:3000/plants'),
        Component: Home
      },
      {
       path: 'plant/:id',
       Component: PlantDetails
      },
      {
        path: 'addPlant',
        Component: () => (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-plants",
        Component: () => (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
      },
      {
        path: 'updatePlant/:id',
        loader: ({params}) => fetch (`http://localhost:3000/plant/${params.id}`),
        Component: UpdatePlant
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signUp',
        Component: SignUp
      },
      {
        path: 'users',
        loader: () => fetch ('http://localhost:3000/users'),
        Component: Users
      },
    {
      path:'plantCard',
      Component: PlantCard
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
