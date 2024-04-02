import React, { useEffect } from "react";
import "./AboutUs.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function AboutUs() {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 180
    });
  }, []); // Empty dependency array ensures AOS.init() runs only once after component mounting

  return (
    <>
   
      <div class="slider-frame">
            <div class="slide-images">
                    <div class="img-container1">
                        
                    </div>
                    <div class="img-container2">
                        
                    </div>
                    <div class="img-container3">
                        
                    </div>
            </div>
            
        
    </div>
    <div className="patient">
      <h1>About Us</h1>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p>
    <p>dnsjdnjsanjnajcnznnxz</p></div>
</>
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

