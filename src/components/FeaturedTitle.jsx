import React from "react";

const FeaturedTitle = ({ text, className }) => {
  return (<div>
    <h1 className={className + " text-xl text-blue-500 font-semibold"}>
      {text}
    </h1>
  </div>);
};

export default FeaturedTitle;
