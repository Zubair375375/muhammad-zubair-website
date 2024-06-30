import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import heroImg from "./Asset 8@4x-100.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className="container my-5 py-4"
        style={{ width: "100%", maxWidth: "1350px" }}
      >
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 marginTop">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Building{" "}
              <span style={{ color: "rgb(0, 65, 134)" }}>technology</span> with
              passion and{" "}
              <span style={{ color: "rgb(0, 65, 134)" }}>innovation.</span>
            </h1>
            <p className="lead">
              As a software developer, I create custom solutions to fit your
              needs, turning ideas into successful software. Let’s bring your
              vision to life together.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2 fw-bold"
                style={{
                  backgroundColor: "rgb(0, 52, 107)",
                  border: "none",
                  color: "white",
                }}
              >
                <a
                  href="#featured-3"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Projects
                </a>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <Link
                  to="/getintouch"
                  style={{ color: "gray", textDecoration: "none" }}
                  className="gitHov"
                >
                  Get in Touch
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden correctHeroImage">
            <img
              className="rounded-lg-3 heroImage"
              src={heroImg}
              alt=""
              width="430"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
