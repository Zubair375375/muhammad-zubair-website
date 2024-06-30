import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reactLogo from "./react-1-logo-black-and-white.png";
import nodeLogo from "./nodeLogo.jpeg";
import tailwindLogo from "./tailwindLogo.png";
// import logo from "./Asset 5@4x.png";

function Technologies() {
  return (
    <>
      <div className="container marketing" style={{ padding: "3rem 0" }}>
        <h2
          style={{
            color: "rgb(0, 52, 107)",
            fontWeight: "bold",
            marginBottom: "2rem",
            marginLeft: "0.4rem",
          }}
        >
          Technologies I'm familiar with
        </h2>
        <div className="row">
          <div
            style={{
              paddingTop: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
            }}
            className="col-lg-4 margthis"
          >
            <img
              src={reactLogo}
              style={{ width: "10rem", borderRadius: "10rem" }}
            />

            <h2 className="fw-normal">React Js</h2>
            <p style={{ textAlign: "center" }}>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p> */}
          </div>
          <div
            className="col-lg-4 margthis"
            style={{
              paddingTop: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
            }}
          >
            <img
              src={nodeLogo}
              style={{ width: "10rem", borderRadius: "10rem" }}
            />
            <h2 className="fw-normal">Node Js</h2>
            <p style={{ textAlign: "center" }}>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p> */}
          </div>
          <div
            className="col-lg-4 margthis"
            style={{
              paddingTop: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
            }}
          >
            <img
              src={tailwindLogo}
              style={{ width: "10rem", borderRadius: "10rem" }}
            />
            <h2 className="fw-normal">Tailwind</h2>
            <p style={{ textAlign: "center" }}>
              And lastly this, the third column of representative area is for
              placeholder content.
            </p>
            {/* <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
