import React, { useState } from "react";
import Loginscreen from "./Components/Loginscreen/Loginscreen";
import Registerpage from "./Components/Registerpage/Registerpage";
import Formpage from "./Components/Formpage/Formpage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [color, setColor] = useState("#005095");

  const handleTogglePage = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLogin(true);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar onColorChange={handleColorChange} />
          <div className="page-alignment">
            <Sidebar onLogout={handleLogout} color={color} />
            <Formpage className="formpage-scroll" />
          </div>
        </>
      ) : isLogin ? (
        <Loginscreen
          togglePage={handleTogglePage}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <Registerpage togglePage={handleTogglePage} />
      )}
    </>
  );
};

export default Main;
