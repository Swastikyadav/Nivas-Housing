import React from "react";
import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import HeroForm from "../../components/hero-form/hero-form.component";
import HouseCard from "../../components/house-card/house-card.component";

import HouseArray from "../../housesArray";

function HomePage() {
  return (
    <>
      <div className="hero">
        <Header />

        <div className="tagline-form">
          <div className="tagline">
            <p>Luxury Housing</p>
            <h1>
              ROYAL <br /> OAKS
            </h1>
            <p>
              I am a paragraph. Please click on the house <br /> image below. I
              will be greatfull if you check <br /> the site patientlly.
            </p>
          </div>
          <HeroForm />
        </div>
      </div>

      <h1 style={{ margin: "30px 0", textAlign: "center" }}>
        FEATURED PROPERTIES
      </h1>

      <div className="featured-properties">
          {
              HouseArray.map((house, idx) => {
                return <HouseCard houseArr={house} key={idx} />
              })
          }
      </div>

      <footer style={{textAlign: "center", margin: "20px"}}>
          Created By Swastik Yadav.
          @ All Rights reserved 2019
      </footer>
    </>
  );
}

export default HomePage;
