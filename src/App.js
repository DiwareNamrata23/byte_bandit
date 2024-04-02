
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import ContactPage from'./Components/ContactPage/ContactPage';

function App() {
  
  return(
   <>

   {/* <CLand/>
   <Home/> */}
   
   <Router>

        <Navbar />
        <Routes>
            
        <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactPage/>} />
           
          <Route path="/about" element={<AboutUs/>} />
     
       
        </Routes>
  <Footer/>
  </Router>
   </>
  );
}

export default App;
