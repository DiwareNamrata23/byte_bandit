// import React, { useRef } from "react";
// import emailjs from 'emailjs-com';

// import "./FormPage.css";

// function FormPage() {
//   const form = useRef();
//   const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
//   const templateId = process.env.REACT_APP_TEMPLATE_ID;
//   const publicKey = process.env.REACT_APP_PUBLIC_KEY;

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(emailService, templateId, form.current, publicKey).then(
//       (result) => {
//         console.log(result.text);
//         alert("Message sent successfully!");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Message Not Send, Retry after Sometime!!");
//         console.log(error.text);
//       }
//     );
//   };

//   return (
//     <div className="Form">
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="contatusform-name">
//           <label>Name</label>
//           <input type="text" name="to_name" required />
//         </div>
//         <div className="contactusform-email">
//           <label>Email</label>
//           <input type="email" name="from_name" required />
//         </div>
//         <div className="contactform-msg">
//           <label>Message</label>
//           <textarea
//             name="message"
//             placeholder="Type something here!"
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FormPage;




// import React, { useRef } from "react";
// import emailjs from 'emailjs-com';

// import "./FormPage.css";

// function FormPage() {
//   const form = useRef();
//   const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
//   const templateId = process.env.REACT_APP_TEMPLATE_ID;
//   const publicKey = process.env.REACT_APP_PUBLIC_KEY;

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(emailService, templateId, form.current, publicKey).then(
//       (result) => {
//         console.log(result.text);
//         alert("Message sent successfully!");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Message Not Send, Retry after Sometime!!");
//         console.log(error.text);
//       }
//     );
//   };

//   return (
//     <div className="form-container">
//       <div className="ring">
//         <i style={{ "--clr": "#00ff0a" }}></i>
//         <i style={{ "--clr": "#ff0057" }}></i>
//         <i style={{ "--clr": "#fffd44" }}></i>
//         <div className="login">
//           <h2>Contact Us</h2>
//           <div className="inputBx">
//             <input type="text" placeholder="Username" />
//           </div>
//           <div className="inputBx">
//             <input type="email" placeholder="email" />
//           </div>
//           <div className="inputBx">
//             <input type="text" placeholder="Message" />
//           </div>
//           <div className="inputBx">
//             <input type="submit" value="Submit" />
//           </div>
          
          
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default FormPage;

import React from "react";
// Remove 'emailjs' import if not used
// import emailjs from 'emailjs-com'; 

import "./FormPage.css";

function FormPage() {
  // Remove 'form', 'emailService', 'templateId', and 'publicKey' declarations if not used
  // const form = useRef();
  // const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID;
  // const templateId = process.env.REACT_APP_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  return (
    <div className="form-container">
      
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="login">
          <h2>Form</h2>
          <div className="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBx">
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBx">
            <input type="text" placeholder="Message" />
          </div>
          <div className="inputBx">
            <input type="submit" value="Submit" />
            
        </div>
      </div>
    </div></div>
  );
}

export default FormPage;
