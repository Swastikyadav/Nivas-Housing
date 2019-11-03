import React from "react";
import "./aside-form.styles.scss";

function AsideForm() {
  return (
    <>
      <form className="contact-form">
        <div>
          <p className="notice">
            Offer: Pay 10% Now and No EMI till <br /> 31st Dec 2019
          </p>
        </div>
        <div>
          <input type="text" id="formGroupExampleInput" placeholder="Name" />
        </div>
        <div>
          <input type="text" id="formGroupExampleInput2" placeholder="Email" />
        </div>
        <div>
          <input type="text" id="formGroupExampleInput" placeholder="Mobile" />
        </div>
        <button>Contact Builder</button>
      </form>
    </>
  );
}

export default AsideForm;
