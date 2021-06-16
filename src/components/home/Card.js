import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, id }) => {
  return (
    <div className="card m-3" title="Tooltip on top">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{`${description.substr(
          0,
          100
        )}....`}</p>
        <Link to={`/blogs/${id}`}>
          <button className="btn btn-dark bottom-0">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
