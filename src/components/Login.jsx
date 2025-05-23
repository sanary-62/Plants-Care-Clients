

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { LoginUser, GoogleSignIn } = useContext(AuthContext);
const navigate = useNavigate();





const HandleLogin = (e) => {
  e.preventDefault(); // <- prevent form reload
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  if (!email || !password) {
    console.error("Email and password cannot be empty.");
    return;
  }

  console.log(email, password);

  LoginUser(email, password)
    .then(result => {
      console.log("Login successful:", result.user);
      navigate("/");
    })
    .catch(error => {
  console.error("Login failed:", error.message);
  Swal.fire({
    icon: "error",
    title: "Wrong Password",
    text: error.message,
  });
});

};


const HandleGoogleLogin = () => {
  GoogleSignIn()
    .then(result => {
      console.log("Google login successful:", result.user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome ${result.user.displayName || "User"}!`,
      });
      navigate("/");
    })
    .catch(error => {
      console.error("Google login failed:", error.message);
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
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
          <h1 className="text-5xl font-bold text-green-800">Login now!</h1>
          <p className="py-6 text-orange-700">
            Log in to manage your garden, track watering schedules, update <br />
            plant info, and get personalized care tips instantly
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={HandleLogin}>
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4 bg-green-800 border-0">
                Login
              </button>
            </form>
            <button
  type="button"
  onClick={HandleGoogleLogin}
  className="btn btn-outline mt-2 w-full text-green-800 border-green-800 hover:bg-green-800 hover:text-white"
>
  <img
    src="https://img.icons8.com/?size=96&id=17949&format=png"
    alt="Google logo"
    className="w-5 h-5 mr-2"
  />
  Login with Google
</button>
<p className="text-sm text-center mt-4">
  Don’t have an account?{" "}
  <a
    href="/signUp"
    className="text-green-800 underline hover:text-green-600"
  >
    Sign up
  </a>
</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
