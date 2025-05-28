import React from 'react';

const ErrorPage = () => {
  return (
    <div className="p-6 text-center">
        <img className='ml-140 h-96 w-96' src="/src/assets/Error.png" alt="" />
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p>Please try again later or go back to the homepage.</p>
      <button onClick={() => window.history.back()} className="mt-4 btn btn-primary bg-green-800">
        Go Back
      </button>
    </div>
  );
};


export default ErrorPage;