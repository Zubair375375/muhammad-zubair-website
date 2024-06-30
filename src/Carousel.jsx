// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
// import otherImage from "./otherimage.webp";
// import otherImg2 from "./otherImg2.webp";
// // import pimage from "./lahore.jpg";
// import otherImg3 from "./otherImg3.webp";

// function Carousel() {
//   return (
//     <>
//       <div
//         id="myCarousel"
//         className="carousel slide mb-6"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="0"
//             className="active"
//             aria-label="Slide 1"
//             aria-current="true"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//             className=""
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//             className=""
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={otherImage}
//               className="d-block w-100"
//               style={{ height: "40rem" }}
//               alt="First slide"
//             />
//             <div className="container">
//               <div className="carousel-caption text-start">
//                 <h1>Example headline.</h1>
//                 <p className="opacity-75">
//                   Some representative placeholder content for the first slide of
//                   the carousel.
//                 </p>
//                 <p>
//                   <a className="btn btn-lg btn-primary" href="#">
//                     Sign up today
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src={otherImg2}
//               className="d-block w-100"
//               style={{ height: "40rem" }}
//               alt="Second slide"
//             />
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1>Another example headline.</h1>
//                 <p>
//                   Some representative placeholder content for the second slide
//                   of the carousel.
//                 </p>
//                 <p>
//                   <a className="btn btn-lg btn-primary" href="#">
//                     Learn more
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src={otherImg3}
//               className="d-block w-100"
//               style={{ height: "40rem" }}
//               alt="Third slide"
//             />
//             <div className="container">
//               <div className="carousel-caption text-end">
//                 <h1>One more for good measure.</h1>
//                 <p>
//                   Some representative placeholder content for the third slide of
//                   this carousel.
//                 </p>
//                 <p>
//                   <a className="btn btn-lg btn-primary" href="#">
//                     Browse gallery
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default Carousel;

///////////////////////

import React from "react";
import otherImage from "./otherimage.webp";
import otherImg2 from "./otherImg2.webp";
import otherImg3 from "./otherImg3.webp";

function CarouselComponent() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={otherImage}
            className="d-block w-100"
            style={{ height: "40rem" }}
            alt="First slide"
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Empowering Businesses with Smart Solutions</h1>
              <p className="opacity-75">
                Our innovative business solutions are designed to drive growth
                and efficiency. Explore how we can help you streamline
                operations, improve customer experiences, and achieve your
                business goals.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={otherImg2}
            className="d-block w-100"
            style={{ height: "40rem" }}
            alt="Second slide"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Empowering Businesses with Smart Solutions</h1>
              <p>
                Our innovative business solutions are designed to drive growth
                and efficiency. Explore how we can help you streamline
                operations, improve customer experiences, and achieve your
                business goals.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={otherImg3}
            className="d-block w-100"
            style={{ height: "40rem" }}
            alt="Third slide"
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Empowering Businesses with Smart Solutions</h1>
              <p>
                Our innovative business solutions are designed to drive growth
                and efficiency. Explore how we can help you streamline
                operations, improve customer experiences, and achieve your
                business goals.
              </p>
              {/* <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;
