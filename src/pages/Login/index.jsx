import React from "react";
import { Button, Gap, Input } from "../../assets/components";

function Login() {
  return (
    <section className="container">
      <div className="login">
        <div className="row content-login text-center">
          <div className="col-lg-12">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="fw-bold">Login Page</h5>
                <Gap height={75} />
                <form action={"/dashboard"}>
                  <Input type="text" placeholder="username" />
                  <Input type="password" placeholder="password" />
                  <Button className="btn btn-primary w-100">Login</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
