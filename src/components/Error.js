import React from "react";

const Error = ({ error }) => {
  return (
    <div className="container-fluid text-center my-5">
      <span className="h3 d-block">{error}</span>
      <button
        className="btn m-4 btn-dark"
        style={{ backgroundColor: "#3ae374", color: "#2d3436" }}
        onClick={() => {
          window.location.reload();
        }}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
