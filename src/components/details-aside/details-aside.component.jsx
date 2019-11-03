import React from "react";
import AsideForm from "../aside-form/aside-form.component";
import { Link } from "react-router-dom";

import "./details-aside.styles.scss";

function DetailsAside({ house: { name, address, price } }) {
  return (
    <>
      <div className="aside">
        <Link to="/">
          <img
            src="https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Flogo.png?1557150099515"
            alt=""
            width="100"
          />
        </Link>
        <h3>{name}</h3>
        <br />
        <p>{address}</p>
        <div className="price-highlight">
          <h4>
            &#8377; {price} Lac <small>Onwards</small>
          </h4>
          <h6>
            <strong>2, 3 & 4 BHK</strong> Flats | <strong>57.81 - 142.5</strong>
            <small> sqm</small>
          </h6>
        </div>
        <br />
        <AsideForm />
      </div>
    </>
  );
}

export default DetailsAside;
