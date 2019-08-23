import React from "react";
import ReactLoading from "react-loading";

const SpinnerComponent = props => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <ReactLoading
          type="spin"
          color="rgb(43, 73, 136)"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default SpinnerComponent;
