import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import logo from "./Asset 5@4x.png";
import { useState } from "react";

function Navbar({ setShowModal }) {
  function handleShowModal() {
    setShowModal(true);
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        aria-label="Offcanvas navbar large"
        style={{
          height: "5rem",
          backgroundColor: "rgb(0, 52, 107)",
          position: "fixed",
          width: "100%",
          top: "0rem",
          zIndex: "20",
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MZ-Logo" style={{ width: "3.5rem" }} />
          </a>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                  Muhammad Zubair
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="offcanvas-body"
                style={{
                  width: "30rem",
                }}
              >
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#featuredd">
                      All Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#about-section-access"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#custom-cards">
                      Blogs
                    </a>
                  </li>
                </ul>
                <button
                  id="hoverThis"
                  className="btn"
                  onClick={handleShowModal}
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
