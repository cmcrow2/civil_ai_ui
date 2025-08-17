import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="mx-10 mt-20 bg-white p-4 rounded-md shadow-lg">
      <div className="flex justify-center">{icon}</div>
      <h2 className="font-merriweather text-3xl pt-4 pb-2 underline underline-offset-4 decoration-2 decoration-red">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
