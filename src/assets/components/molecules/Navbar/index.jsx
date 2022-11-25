import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms";

function Navbar() {
  return (
    <nav className="mt-3">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6">
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
          <div className="col-6 text-end">
            <div>
              <Button className="btn btn-primary" type="link" href="/login">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
