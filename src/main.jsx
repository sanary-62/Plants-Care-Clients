import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";
import AppWrapper from "./components/AppWrapper";

import Home from "./components/Home";
import AddPlant from "./components/AddPlant";
import PlantDetails from "./components/PlantDetails";
import UpdatePlant from "./components/UpdatePlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import Users from "./components/Users";
import MyPlants from "./components/MyPlants";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage";

import PlantCardPage from "./components/PlantCardPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppWrapper,
    children: [
      {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        loader: () => new Promise((res) => setTimeout(() => res(null), 500)),
        children: [
          {
            index: true,
            loader: () => fetch("http://localhost:3000/plants"),
            Component: Home,
          },
          {
            path: "plantDetails/:id",
            element: <PlantDetails />,
            loader: () =>
              new Promise((res) => setTimeout(() => res(null), 500)),
          },
          {
            path: "addPlant",
            loader: () =>
              new Promise((res) => setTimeout(() => res(null), 500)), // 500ms delay
            Component: () => (
              <PrivateRoute>
                <AddPlant />
              </PrivateRoute>
            ),
          },

          {
            path: "my-plants",
            element: (
              <PrivateRoute>
                <MyPlants />
              </PrivateRoute>
            ),
            loader: () =>
              new Promise((res) => setTimeout(() => res(null), 500)),
          },
          {
            path: "plantCard",
            loader: () => fetch("http://localhost:3000/plants"),
            Component: PlantCardPage,
          },

          {
            path: "updatePlant/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:3000/plants/${params.id}`).then((res) =>
                res.json()
              ),
            Component: UpdatePlant,
          },
          {
            path: "login",
            Component: Login,
            loader: () =>
              new Promise((res) => setTimeout(() => res(null), 500)),
          },
          {
            path: "signUp",
            Component: SignUp,
            loader: () =>
              new Promise((res) => setTimeout(() => res(null), 500)),
          },
          {
            path: "users",
            loader: () => fetch("http://localhost:3000/users"),
            Component: Users,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
