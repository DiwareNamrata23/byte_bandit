import React from "react";
import "./AboutUs.css";


function AboutUs() {
  
  

  return (
    <>
    <div className="joinus"><h3>Join Us on the Mobile</h3>
    <div className="sheild">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti expedita architecto, voluptatum cum maiores, distinctio repudiandae vero nam libero alias eum aliquid. Quis animi ratione labore, laboriosam incidunt ea </p>
    <button className="download-button">Download Now</button>
    </div>
    
    
    </div>
    <div className="meet">
    <h3>Meet Our Team</h3>
    <div className="flipcard">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"></div>
          <div class="flip-card-back">
            <h1>Namrata Diware</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front2"></div>
          <div class="flip-card-back">
            <h1>Prathamesh Rokade</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front3"></div>
          <div class="flip-card-back">
            <h1>Pranay Rokade</h1> 
            <p>Computer Science Engineer</p> 
            <p>I'm a 2nd year Btech student pursuing Engineering in Shri RamdeoBaba College of Engineering and Management </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};


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

