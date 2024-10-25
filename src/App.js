import "./App.css";
import React, { useEffect } from "react";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      delay: 0,
    });
  }, []);

  return (
    <>
      <Main></Main>
    </>
  );
}

export default App;
