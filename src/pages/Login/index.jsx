import React, { useState } from "react";
import { Gap, Input } from "../../assets/components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { storeData } from "../../utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    response.data.map((item) => {
      const getUsername = item.username;
      if (getUsername === username) {
        setUsername(getUsername);
        storeData("user", item);
        history("/dashboard", { state: { username: username } });
      }
    });
  };

  return (
    <section className="container">
      <div className="login">
        <div className="row content-login text-center">
          <div className="col-lg-12">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="fw-bold">Login Page</h5>
                <Gap height={75} />
                <form onSubmit={login}>
                  <Input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
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
