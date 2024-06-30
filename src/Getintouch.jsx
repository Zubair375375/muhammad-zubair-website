import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import myDp from "./myDp.png";
import linkedin from "./linkedin-logo-png-2026.png";
import github from "./github-icon-38971.jpg";
import twitter from "./twitter-icon-67.png";

function Getintouch() {
  return (
    <>
      <section className="py-3" style={{ marginTop: "6rem" }} id="gitt">
        <div className="container gitMargin1">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                src={myDp}
                className="img-fluid"
                alt="Peshawar"
                style={{
                  width: "13rem",
                  height: "13rem",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-6 col-lg-8 gitMargin2">
              <div className="ml-md-4">
                <h2 className="aboutText" style={{ fontSize: "1.8rem" }}>
                  Muhammad Zubair
                </h2>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Software Engineer
                </h5>
                <p className="fitThisText" style={{ fontSize: "1rem" }}>
                  Let's connect! I'd love to hear from you. Whether you have a
                  question, want to collaborate, or just want to say hi, feel
                  free to reach out to me on my social media accounts. Follow me
                  on Twitter, connect with me on LinkedIn, and check out my
                  projects on GitHub. I'm always excited to meet new people and
                  explore new opportunities. Looking forward to connecting with
                  you!
                </p>
                <span>muhammadzubair375375@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- <hr className="featurette-divider mx-5" /> --> */}

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Get in Touch</h2>
        <div
          className="row g-4 py-5 row-cols-1 row-cols-lg-4"
          style={{
            width: "100%",
            margin: "auto auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="feature col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 2rem",
            }}
          >
            <div
              style={{ borderRadius: "6%" }}
              className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
              {/* <svg className="bi" width="1em" height="1em">
                <use href="#collection"></use>
              </svg> */}
              <img
                src={linkedin}
                alt=""
                style={{ width: "15rem", height: "15rem", borderRadius: "6%" }}
              />
            </div>
            <h3
              style={{ textAlign: "center" }}
              className="fs-2 text-body-emphasis"
            >
              Linkedin
            </h3>
            <p style={{ textAlign: "center" }}>
              Connect with me on LinkedIn! I'm a software engineer open to
              networking and collaboration. Let's exchange ideas and grow
              together!
            </p>
            <a
              href="https://www.linkedin.com/in/muhammad-zubair-b9984b27b/"
              target="_blank"
              className="icon-link"
            >
              Visit
              {/* <svg className="bi">
                <use href="#chevron-right"></use>
              </svg> */}
            </a>
          </div>
          <div
            className="feature col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 2rem",
            }}
          >
            <div
              style={{ borderRadius: "6%" }}
              className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
              {/* <svg className="bi" width="1em" height="1em">
                <use href="#people-circle"></use>
              </svg> */}
              <img
                src={github}
                alt=""
                style={{ width: "15rem", height: "15rem", borderRadius: "6%" }}
              />
            </div>
            <h3
              style={{ textAlign: "center" }}
              className="fs-2 text-body-emphasis"
            >
              Github
            </h3>
            <p style={{ textAlign: "center" }}>
              Check out my GitHub! Explore my projects, contribute, or
              collaborate. Let's build something amazing together!
            </p>
            <a
              href="https://github.com/Zubair375375"
              target="_blank"
              className="icon-link"
            >
              Visit
              {/* <svg className="bi">
                <use href="#chevron-right"></use>
              </svg> */}
            </a>
          </div>
          <div
            className="feature col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 2rem",
            }}
          >
            <div
              style={{ borderRadius: "6%" }}
              className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
              {/* <svg className="bi" width="1em" height="1em">
                <use href="#toggles2"></use>
              </svg> */}
              <img
                src={twitter}
                alt=""
                style={{ width: "15rem", height: "15rem", borderRadius: "6%" }}
              />
            </div>
            <h3
              style={{ textAlign: "center" }}
              className="fs-2 text-body-emphasis"
            >
              Twitter
            </h3>
            <p style={{ textAlign: "center" }}>
              Follow me on Twitter for software development updates and
              insights. Let's connect and share our passion for coding!
            </p>
            <a href="#" target="_blank" className="icon-link">
              Visit
              {/* <svg className="bi">
                <use href="#chevron-right"></use>
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getintouch;
