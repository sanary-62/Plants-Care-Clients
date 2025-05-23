import React from "react";

const Login = () => {
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
        <div className="text-center lg:text-left text-white ">
          <h1 className="text-5xl font-bold text-green-800">Login now!</h1>
          <p className="py-6 text-orange-700">
 Log in to manage your garden, track watering schedules, update <br /> plant info, and get personalized care tips instantly
</p>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 bg-green-800 border-0">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
