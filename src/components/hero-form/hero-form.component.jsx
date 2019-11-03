import React from "react";

function HeroForm() {
  return (
    <div className="form-container">
      <form>
        <h3>
          YOUR NEW <br /> HOME AWAITS.
        </h3>
        <p>Contact us to get the best offer from out agent.</p>
        <div>
          <div class>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Email" />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Contact Our Agent</button>
      </form>
    </div>
  );
}

export default HeroForm;
