import { Routes, Route } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import MyPlants from "./components/MyPlants";
import PrivateRoute from "./components/PrivateRoute";
import UpdatePlant from "./components/UpdatePlant";

function App() {
  return (
    <Routes>
      <Route
        path="/addPlant"
        element={
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        }
      />

      <Route
        path="/my-plants"
        element={
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        }
      />

      <Route
        path="updatePlant/:id"
        element={
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
