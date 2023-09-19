import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './CupApp';
import Login from './Login';
import Groupcup from './Groupcup';
import ContactUs from './ContactUs';
function CupApp() {
  return ( 
    <Router>
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/Home" class="nav-link"><p style={{color:"#FF007F"}}>Home</p></Link>
  </li>
  <li class="nav-item">
    <Link to="/Login" class="nav-link"><p style={{color:"#FF007F"}}>Login</p></Link>
  </li>
  <li class="nav-item">
    <Link to="/Groupcup" class="nav-link"><p style={{color:"#FF007F"}}>Buy now</p></Link>
  </li>
  <li class="nav-item">
    <Link to="/Contact" class="nav-link"><p style={{color:"#FF007F"}}>Contact us</p></Link>
  </li>
</ul>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/groupcup" element={<Groupcup/>}></Route>
  <Route path="/contact" element={<ContactUs/>}></Route>
</Routes>
    </Router>
   );
}

export default CupApp;