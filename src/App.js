import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured";
import Blog from "./Blog";
import Otherprojects from "./Otherprojects";
import Carousel from "./Carousel";
import Technologies from "./Technologies";
import Form from "./Form";
import Footer from "./Footer";
import Resume from "./Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import your local CSS styles if needed
import "./index.css"; // Import index.css from React
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      (showModal && <Resume showModal={showModal} setShowModal={setShowModal} />
      )
      <Hero />
      <About />
      <hr className="featurette-divider" style={{ marginTop: "18rem" }} />
      <h1 className="visually-hidden">Features examples</h1>
      <Featured />
      <Blog />
      <Otherprojects />
      <Carousel />
      <Technologies />
      <hr className="featurette-divider" style={{ marginBottom: "4rem" }} />
      {/* <Form /> */}
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
