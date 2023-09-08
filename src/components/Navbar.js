//import { useHistory } from "react-router";
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  

return ( <>
  <nav className="navbar">
    <div className="my-col-10 off-1">
      <div className="my-col-2">
        <div className="my-col-10 off-1">
          <span className="logo px13 bold">Genebank</span>
        </div>
      </div>
      <div className="my-col-7 centered bold px13">
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <FaTimes /> : <FaBars />} {/* Toggle between FaBars and FaTimes based on showNavbar */}
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>

          <Link to='/'>
           <span className="links">Home</span>
          </Link>
          <Link to='/userguide'>
           <span className="links">Userguides</span>
          </Link>
          <Link to='/research'>
           <span className="links">Research </span>
          </Link>
          <span className="links">Publication
            <div className="extension">
            <i className="fas fa-angle-down mg-3"></i> 
            <div className="nav-extentions">
              <div className="my-col-10 off-1 down-5">
                <div className="ex-links">Journals</div>
                <div className="ex-links">Conference & Events</div>
            </div>
            </div>
            </div>  
          </span>
          <span className="links">About
           <div className="extension">
           <i className="fas fa-angle-down mg-3"></i>
           <div className="nav-extentions">
            <div className="my-col-10 off-1 down-5">
              <Link to='/who-we-are'>
               <div className="ex-links">Who We Are</div>
              </Link>
              <Link to='/our-team'>
               <div className="ex-links">Our Team</div>
              </Link>
            </div>
           </div>
           </div>
          </span>
        </div>
      </div>
          
    </div>
  </nav> 
 </> 
 );
}
 
export default Navbar;