import React from "react";

const ErrorPage = () => {
  return (
    <div className="p-6 text-center mt-12">
      <img
        className="mx-auto h-48 md:h-96 w-auto md:w-96"
        src="/src/assets/Error.png"
        alt="Error Illustration"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-base md:text-lg">
        Please try again later or go back to the homepage.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 btn btn-primary bg-green-800 px-6 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
