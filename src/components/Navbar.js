//import { useHistory } from "react-router";
import { useState } from 'react';
import "../index.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import genelogo from "../images/bme gene.png";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLiClick = () => {
    setShowNavbar(false);
  };
  

return ( <>
  <nav className="nav">
    <div className="my-col-10 off-1">
      <div className="my-col-2 xs-down-1">
        <div className="my-col-10 xs-5 off-1">
          <span className=" px13 bold"><img className="genelogo" src={genelogo} alt=""/></span>
        </div>
      </div>
      <div className="my-col-7 down-1 mg-11 xs-2 bold px13">
        <div className="menu-icon-x" onClick={handleShowNavbar}>
          {showNavbar ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />} {/* Toggle between FaBars and FaTimes based on showNavbar */}
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>

          <Link to='/' onClick={handleLiClick}>
           <li className="linkk">Home</li>
          </Link>
          <Link to='/research' onClick={handleLiClick}>
           <li className="linkk">Research </li>
          </Link>
          <li className="linkk">Publication
            <div className="extension">
            <i className="fas fa-angle-down mg-3"></i> 
            <div className="nav-extentions">
              <div className="my-col-10 off-1 down-5">
               <Link to='/our-publications' onClick={handleLiClick}>
                 <div className="ex-links">Journals</div>
               </Link>
                <div className="ex-links">Conference & Events</div>
            </div>
            </div>
            </div>  
          </li>
          <li className="linkk mg">About
           <div className="extension">
           <i className="fas fa-angle-down mg-3"></i>
           <div className="nav-extentions">
            <div className="my-col-10 off-1 down-5">
              <Link to='/who-we-are' onClick={handleLiClick}>
               <div className="ex-links">Who We Are</div>
              </Link>
              <Link to='/our-team' onClick={handleLiClick}>
               <div className="ex-links">Our Team</div>
              </Link>
            </div>
           </div>
           </div>
          </li>
        </div>
      </div>
          
    </div>
  </nav> 
 </> 
 );
}
 
export default Navbar;