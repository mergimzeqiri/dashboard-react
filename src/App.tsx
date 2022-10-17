import "./App.scss";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ChampionInfo from "./pages/championInfo/ChampionInfo";
import React, { useEffect } from "react";
import DriverInfo from "./pages/driverinfo/DriverInfo";
import LoginAdmin from "./components/login/LoginAdmin";
import { useAuthContext } from "./components/context/authentication/Authcontext";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  //button to log out
  const logOoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <div className="App">
      <div className="App-wrapper">
        {isAuthenticated && (
          <>
            <SideBar />
            <button onClick={logOoutHandler}>Log Out</button>
          </>
        )}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate to="/year/2009" />} />
            <Route path={`/year/:id`} element={<ChampionInfo />} />
            <Route
              path={"/year/:id/driver/:driverId"}
              element={<DriverInfo />}
            />
          </Route>
          <Route path="/login" element={<LoginAdmin />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
