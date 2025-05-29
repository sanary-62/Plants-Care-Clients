import React from "react";
import Lottie from "lottie-react";
import plantAnimation from "./plant.json"; // Download a JSON animation from lottiefiles.com and keep it in src/

const LottiePlantAnimation = () => {
  return (
    <div className="w-48 mx-auto">
      <Lottie animationData={plantAnimation} loop={true} />
    </div>
  );
};

export default LottiePlantAnimation;
