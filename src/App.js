
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
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
   <Auth0Provider
    domain="dev-n6wdwty28zmy4gom.us.auth0.com"
    clientId="22x7UCFHLBCChWXiiAXzEbWyqq5KH22a"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <Router>

        <Navbar />
        <Routes>
            
        <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactPage/>} />
           
          <Route path="/about" element={<AboutUs/>} />
     
       
        </Routes>
  <Footer/>
  </Router>
</Auth0Provider>,
   </>
  );
}

export default App;
