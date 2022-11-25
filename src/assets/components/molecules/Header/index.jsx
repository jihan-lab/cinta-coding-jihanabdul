import React from "react";
import { Button } from "../../atoms";

function Header({ name }) {
  return (
    <nav className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-md-12 d-flex">
            <div>
              <Button
                style={{ textDecoration: "none" }}
                className="h3 fw-bold text-dark"
                href="/"
                type="link"
              >
                Cinta Coding
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 d-flex align-items-end justify-content-center">
            <div
              className="h5 fw-bold text-black-50 post px-3 pb-1"
              href="/"
              type="link"
            >
              Post
            </div>
          </div>
          <div className="col-lg-4  col-md-12 justify-content-end d-flex align-items-end">
            <div className="h3 fw-bold text-dark">
              Welcome, <span className="text-primary">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
