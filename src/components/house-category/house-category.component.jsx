import React from "react";
import "./house-category.styles.scss";

import HouseTypes from "../../house-type";

class HouseCategory extends React.Component {
  constructor({ house }) {
    super({ house });

    this.state = {
      category: HouseTypes[0]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { textContent } = event.target;
    const currentType = HouseTypes.filter(type => {
      return type.type === textContent;
    });

    this.setState(
      {
        category: currentType[0]
      },
      () => console.log(this.state)
    );
  }

  render() {
    const { price, type, category, map } = this.state.category;
    return (
      <div className="tabs">
        <button onClick={this.handleClick}>2 BHK</button>
        <button onClick={this.handleClick}>3 BHK</button>
        <button onClick={this.handleClick}>4 BHK</button>

        <div className="type-details">
          <div class="text">
            <div>
              <h5>
                &#8377; {price}
                <br />
                <small>onwards</small>
              </h5>
              <span style={{ margin: "0 8px" }}> || </span>
              <h5>
                {" "}
                {type} <br />
                <small>57.81 sqm</small>
              </h5>
              <span style={{ margin: "0 8px" }}> || </span>
              <h5>
                Possession <br />
                <small>Nov 2019 | Feb 2010</small>
              </h5>
            </div>
            <ul>
              <li>{category} |||</li>
              <li>Designed by renowned architect.</li>
              <li>Three side open</li>
            </ul>
          </div>

          <div>
            <img src={`${map}`} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default HouseCategory;
