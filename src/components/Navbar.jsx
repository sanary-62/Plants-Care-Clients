import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
const userIcon = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => Swal.fire("Logged Out", "", "success"))
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };
  console.log(user);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/plantCard">All Plants</Link>
      </li>
      <li>
        <Link to="/addPlant">Add Plant</Link>
      </li>
      <li>
        <Link to="/my-plants">My Plants</Link>
      </li>
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-md fixed top-0 left-0 z-50">
      <div className="navbar container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-green-700">
            🌿 PlantCare
          </Link>
        </div>

        <div className="hidden lg:flex justify-center flex-1">
          <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
        </div>

        <div className="flex-1 justify-end hidden lg:flex items-center gap-5">
          <div className="login-btn flex gap-5 items-center">
            <div className="relative group">
              <img
                data-tooltip-id="profile-tooltip"
                data-tooltip-content={user?.displayName || "User Profile"}
                className="rounded-full md:w-8 md:h-8 h-6 w-6 object-cover border border-green-600"
                src={user?.photoURL || userIcon}
                alt="User Avatar"
              />

              <ReactTooltip id="profile-tooltip" place="bottom" />
            </div>

            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-red-600 text-white text-lg"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn bg-green-700 text-white text-sm"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signUp"
                  className="btn bg-green-700 text-white text-sm"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div className="lg:hidden flex-1 justify-end flex">
          <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-base-100 shadow-md">
          <ul className="menu p-4 space-y-2">
            {navLinks}
            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-sm btn-outline w-full text-white bg-green-800"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signUp"
                    className="btn btn-sm btn-success w-full text-white bg-green-800"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error btn-sm w-full text-white bg-red-600"
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
