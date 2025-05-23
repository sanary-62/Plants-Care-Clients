import { Routes, Route } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import MyPlants from "./components/MyPlants"; // Assuming you have this component
import PrivateRoute from "./components/PrivateRoute";
// other imports

function App() {
  return (
    <Routes>
      {/* other public routes */}
      
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

      {/* other routes */}
    </Routes>
  );
}

export default App;
