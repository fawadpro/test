import React from "react";

import Loader from "react-loader-spinner";

const Load = (props) => {
  const { title } = props;
  return (
    <div style={{ marginTop: "20px" }} className="text-center">
      <h3 className="dimgray">Loading {title}</h3>
      <p className="dimgray">Hold Your Horses!</p>
      <Loader type="ThreeDots" color="#ef5350" height="40" width="40" />
    </div>
  );
};

export default Load;
