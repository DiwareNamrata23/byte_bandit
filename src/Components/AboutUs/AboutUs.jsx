import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Draggable from "react-draggable";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 180,
    });
  }, []); // Empty dependency array ensures AOS.init() runs only once after component mounting

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div>
    <div className="slider-container">
      <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
      <div className="card-slider">
        <Draggable axis="x">
          <div
            className={`card ${currentIndex === 0 ? "active" : ""}`}
          >
           <h1> Active Emergency</h1>
         
           <p>Call 0-1-5 for emergencies.</p>
           <button>0-1-5</button>
          </div>
        </Draggable>
        <Draggable axis="x">
          <div 
            className={`card ${currentIndex === 1 ? "active" : ""}`}
          >
            <h1>Ambulance</h1>
            <p>Call 0-1-5 for emergencies.</p>
           <button >0-1-5</button>
          </div>
        </Draggable>
        <Draggable axis="x">
          <div
            className={`card ${currentIndex === 2 ? "active" : ""}`}
          >
           <h1> Card 3</h1>
           <p>Call 0-1-5 for emergencies.</p>
           <button>0-1-5</button>
          </div>
        </Draggable>
      </div>
      <button className="arrow next" onClick={nextSlide}>&#10095;</button>
      
    </div>
    {/* <div className="secure">
    <button className="button4"></button>
    <button className="button5"></button>
    <button className="button6"></button>
    {/* <button className="button7"></button> 
  </div> */}
</div>

  );
}

export default AboutUs;






// import React from "react";
// import "./AboutUs.css";

// import Data from "./data.json";

// function AboutUs() {
//   return (
//     <div className="Home-AboutUs">
//       <div className="image-carousel">
//         <div className="image image1"></div>
//         <div className="image image2"></div>
//         <div className="image image3"></div>
//         {/* Add more image divs as needed */}
//       </div>
//       <div className="text-content">
//         <h2>WHAT IS BRC? 🤔</h2>
//         <p>{Data["aboutus"]["whatIsBrc"][0]}</p>
//         <p>{Data["aboutus"]["whatIsBrc"][1]}</p>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

