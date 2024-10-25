import React, { useState } from "react";
import "./Registerpage.css";
import loginimage from "./Assets/Images/login-image.png";
import { MdMailOutline, MdOutlineLock } from "react-icons/md";
import { MdOutlinePerson2 } from "react-icons/md";

const Registerpage = ({ togglePage }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-color container-fluid">
      <div className="main-flex">
        <div className="text-center">
          <img
            src={loginimage}
            alt="Login"
            className="img-fluid base-image"
            width="70%"
          />
        </div>
        <div className="form-division" data-aos="zoom-in">
          <form action="#" className="form-alignment">
            <h1>Register</h1>
            <p className="welcome-word">
              &ensp; Register for Your Health Portal &ensp;
            </p>
            <div className="input-field">
              <div className="pt-4">
                <div className="input-tag">
                  <MdOutlinePerson2 />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    aria-label="Name"
                  />
                </div>

                <div className="input-tag">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    aria-label="Email"
                  />
                </div>
                <div className="input-group input-tag">
                  <div className="input-wrapper">
                    <MdOutlineLock />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={passwordChange}
                      required
                      aria-label="Password"
                    />
                    <span
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                      role="button"
                      aria-label="Toggle password visibility"
                    >
                      <i
                        className={
                          showPassword ? "bi bi-eye-fill" : "bi bi-eye-slash"
                        }
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <button className="login-btn" type="submit">
                Register Now
              </button>
              <p>
                Already have an account?{" "}
                <a href="#" className="register-link" onClick={togglePage}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
