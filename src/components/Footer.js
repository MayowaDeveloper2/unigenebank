import React from 'react';
import biologo from "../images/logobio.png"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };


  return (
    <>
        <div className="my-mother bg-color-code-2 my-bottom-50 xs-down-6 down-4">
          <div className="my-col-10 xs-10 xs-off-1 off-1 xs-down-5 down-5">
            <div className="my-col-4 xs-8">
              <div className="my-col-4 xs-off-3"><img className="biologo" src={biologo} alt="" /></div>
              <div className="down-20 bmetext px12 off-1">To create a genomic database that would facilate
              genomic based research and position the univeristy at the forefront of genomic studies.</div>
            
            </div>
            <div className="my-col-4 px13 off-1 xs-down-6 down-1">
              <div className="my-col-10 xs-down-4 xs-10">
              <span className="color-code-1 bold px13">Menu Links</span>
              <div className="px10 down-4">
                <div>Home</div>
                <div>About Us</div>
                <div>Our Publications</div>
                <div>Conference and Events</div>
              </div>
              </div>
            </div>
            <div className="my-col-3 xs-down-4 px13">
              <div className="my-col-10  xs-down-4 xs-10 off-2">
                <span className="color-code-1 bold px13"> Contact Links</span>
                <div className="px10 down-5 bold"><i className="fas fa-map-marker-alt"></i> P.M.B 1515</div>
                <div className="xs-down-1 down-3 px10 bold">Biomedical Engineering Department, University of Ilorin, Ilorin, Nigeria</div>
                <div className="xs-down-1 down-3 px10"><i className="fas fa-envelope"></i> bmeilorin@gmail.com</div>
              </div>
            </div>
            <div className="my-col-4 xs-down-4 px13">
              <div className="my-col-10 xs-10 off-2">
                <div className="down-5 xs-down-4 about-text px12"><button onClick={handleLoginClick}>Admin Login <i className="fas fa-angle-right"></i></button></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Footer;