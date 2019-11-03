import React from "react";
import DetailsAside from "../../components/details-aside/details-aside.component";
import DetailsContent from "../../components/details-content/details-content.component";
import HouseArray from "../../housesArray";

import "./detailspage.styles.scss";

function DetailsPage({ match: { params } }) {
  const currentHouse = HouseArray.filter(house => {
    return house.name === params.house;
  });
  console.log(currentHouse);
  return (
    <>
      <div className="page-container">
        <DetailsAside house={currentHouse[0]} />
        <DetailsContent house={currentHouse[0]} />
      </div>
    </>
  );
}

export default DetailsPage;
