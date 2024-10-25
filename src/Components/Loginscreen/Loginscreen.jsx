import React, { useState } from "react";
import "./Loginscreen.css";
import loginimage from "./Assets/Images/login-image.png";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = ({ togglePage, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (email && password) {
      setTimeout(() => {
        onLoginSuccess();
      }, 2000);
    }
  };

  return (
    <div className="bg-color container-fluid">
      <div className="main-flex">
        <div className="text-center">
          <img
            src={loginimage}
            alt="base-image"
            className="img-fluid base-image"
            width="70%"
          />
        </div>
        <div className="form-division" data-aos="zoom-in">
          <form className="form-alignment" onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <p className="welcome-word">
              &ensp; Welcome to Your Health Portal! &ensp;
            </p>
            <div className="input-field">
              <div className="pt-4">
                <div className="input-tag">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailChange}
                    required
                  />
                </div>
                <div className="input-group input-tag">
                  <div className="input-wrapper">
                    <MdOutlineLock />{" "}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={passwordChange}
                      required
                    />
                    <span
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
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
              <a href="#" className="forget-tag">
                Forgot Password
              </a>
              <button className="login-btn" type="submit">
                Log In
              </button>

              <p>
                Don't have an account?{" "}
                <a a href="#" className="register-link" onClick={togglePage}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default LoginScreen;
