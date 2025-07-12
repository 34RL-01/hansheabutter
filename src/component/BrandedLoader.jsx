import React from "react";
import hanslg from "../assets/images/hanslg.png";


const BrandedLoader = () => {
  return (

    <div className="branded-loader">
      <img
        src={hanslg}
        alt="Hans Organic Shea Butter Logo"
        className="w-24 h-24 mb-4 animate-pulse"
      />
      <p className="text-[#836953] text-xl font-medium tracking-wide">Nourishing your skin... Please wait</p>
    </div>
  );
};

export default BrandedLoader;
