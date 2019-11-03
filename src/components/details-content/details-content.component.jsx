import React from "react";
import HouseCategory from "../house-category/house-category.component";
import "./details-content.styles.scss";

function DetailsContent(props) {
    const { imgUrl } = props.house;
  return (
    <>
      <div className="content-container">
        <div
          className="houseImg"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="house-categories">
          <HouseCategory house={props} />
        </div>
      </div>
    </>
  );
}

export default DetailsContent;
