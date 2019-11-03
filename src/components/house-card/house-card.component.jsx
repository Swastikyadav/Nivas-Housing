import React from "react";
import { Link } from "react-router-dom";
import "./house-card.styles.scss";

function HouseCard({ houseArr: { name, description, imgUrl } }) {
  return (
    <div className="house-card">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="house-description">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/details/${name}`}>
          <button>See Details</button>
        </Link>
      </div>
    </div>
  );
}

export default HouseCard;
