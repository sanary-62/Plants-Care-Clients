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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true,
        Component: Home
      },
      {
        path: 'addPlant',
        Component: AddPlant
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
