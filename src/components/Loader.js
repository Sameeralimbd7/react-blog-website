import React from "react";

const Loader = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="container-fluid d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem", color: "#3ae374" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loader;
