import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import logo from "./Asset 5@4x.png";

function Form() {
  const email = "muhammadzubair375375@gmail.com";

  const handleSubmit = () => {
    const subject = "Inquiry";
    const body =
      "Dear Muhammad Zubair,\n\nI would like to get in touch regarding...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ marginBottom: "4rem" }}
      >
        <div className="form-group" style={{ margin: "0 0 1rem 0" }}>
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your name"
          />
        </div>
        <div className="form-group" style={{ margin: "0 0 1rem 0" }}>
          <label for="exampleFormControlInput2">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Enter message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
