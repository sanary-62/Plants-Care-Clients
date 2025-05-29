import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    return minLength && hasUpper && hasLower;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain uppercase, lowercase letters, and be at least 6 characters long.",
      });
      return;
    }

    const {
      email: userEmail,
      password: userPassword,
      ...restFormData
    } = formData;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Sign Up Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/Y0W2p54N/leaves-wallpaper-with-metallic-foil-concept-79603-942.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold text-green-800">Sign Up Now!</h1>
          <p className="py-6 text-orange-700">
            Join to manage your plants, schedule watering, track growth, and{" "}
            <br />
            receive tailored gardening tips anytime, anywhere!
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleSubmit}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
                onChange={handleChange}
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
                required
                onChange={handleChange}
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-green-800 border-0"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline text-green-700">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
