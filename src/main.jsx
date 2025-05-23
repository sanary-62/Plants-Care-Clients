import { StrictMode } from 'react'
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
        Component: AddPlant
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
