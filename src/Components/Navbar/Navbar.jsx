import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "./Assets/Images/logo.png";
import { IoMdContact } from "react-icons/io";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { HiPhone } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";

const Navbar = ({ onColorChange }) => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#005095");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const multicolors = ["#005095", "#00798d", "#008b57", "#880099", "#8b0000"];

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  const contactDetails = [
    { label: "Profile", icon: <IoMdPerson /> },
    { label: "Change Password", icon: <RiLockPasswordFill /> },
    { label: "Settings", icon: <IoSettingsSharp /> },
    { label: "Contact", icon: <HiPhone /> },
  ];

  return (
    <>
      <section
        className="theme-color"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="d-flex justify-content-between align-items-center ">
          <div className="py-1 px-5">
            <img src={logo} alt="main-logo" className="img-fluid" width={150} />
          </div>
          <div className="close-icon py-1 px-5">
            <div className="contact-icon">
              <IoMdContact onClick={handleShow} />
            </div>
          </div>
        </div>
        <Offcanvas className="offcanvas"
          show={show}
          onHide={handleClose}
          placement="end"
          style={{
            backgroundColor: color,
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src={logo}
                alt="main-logo"
                className="img-fluid"
                width={180}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="contact-section">
              {contactDetails.map((item, index) => (
                <div key={index} className="contact-item">
                  {item.icon} <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="multicolor-btn">
              {multicolors.map((addcolor, index) => (
                <button
                  key={index}
                  onClick={() => handleColorChange(addcolor)}
                  style={{
                    backgroundColor: addcolor,
                    border: color === addcolor ? "1px solid #e4e4e4" : "",
                  }}
                >
                  {index.label}
                </button>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default Navbar;
