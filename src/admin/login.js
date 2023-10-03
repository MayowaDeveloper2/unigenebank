import React, { useState } from "react";
import axios from "axios";
import loginlogo from "../images/logobio.png";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/backend/api/login.php", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem(
            "userData",
            JSON.stringify(response.data.data)
          );

          window.location.href = "/dashboard";
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="my-col-4 down-8 off-4 my-bottom-50 bg-white">
        <div><img className="off-3 loginlogod" src={loginlogo} alt="" /></div>
        <form onSubmit={handleSubmit}>
          {error && (
            <Alert style={{ marginBottom: "20px" }} severity="error">
              {error}
            </Alert>
          )}
          <div className="inputcss down-4">
            <div className="px12">Username</div>
            <input
              type="email"
              className="inputbox"
              value={email}
              onChange={handleEmailChange}
              id="email"
              label="Email address"
            />
          </div>
          <div className="inputcss down-4">
            <div className="px12">Password</div>
            <input
              className="inputbox"
              value={password}
              onChange={handlePasswordChange}
              variant="filled"
              id="password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </div>
          <button className="off-7 loginx down-3" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;