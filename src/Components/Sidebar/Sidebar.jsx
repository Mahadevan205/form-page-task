import React, { useState } from "react";
import "../Sidebar/Sidebar.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import { TiHome } from "react-icons/ti";
import { GrOverview } from "react-icons/gr";
import { HiDocumentReport } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import Modal from "react-bootstrap/Modal";

const Sidebar = ({ onLogout, color }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <>
      <div className="p-0 height-adjustment">
        <div
          className={`sidebar ${isOpen ? "open" : "closed"}`}
          style={{ backgroundColor: color }}
        >
          {isOpen ? (
            <>
              <ul>
                <li>
                  <a href="#">
                    <TiHome />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GrOverview />
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#">
                    <HiDocumentReport />
                    Results
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdPayments />
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoSettingsSharp />
                    Settings
                  </a>
                </li>
              </ul>
              <MdArrowBackIosNew
                onClick={toggleSidebar}
                className="minimize-btn"
              />
              <ul>
                <li>
                  <a href="#." onClick={handleShow}>
                    <BiLogOut />
                    Logout
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <div className="icon-only">
                <TiHome />
                <GrOverview />
                <HiDocumentReport />
                <MdPayments />
                <IoSettingsSharp />
              </div>
              <MdArrowForwardIos
                onClick={toggleSidebar}
                className="maximize-btn"
              />
              <div className="icon-only">
                <BiLogOut onClick={handleShow} />
              </div>
            </>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}>
        <h5 className="modal-heading">Are you sure you want to log out?</h5>
        <div className="logout-modal">
          <button className="yes-btn" onClick={handleLogout}>
            Yes
          </button>
          <button className="no-btn" onClick={handleClose}>
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
