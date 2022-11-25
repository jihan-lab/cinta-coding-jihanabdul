import React from "react";
import { Navbar } from "../../assets/components";
import { IlGetStarted } from "../../assets/images";

function GetStarted() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img
              className="img-fluid"
              src={IlGetStarted}
              width={"85%"}
              alt="get-started"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
