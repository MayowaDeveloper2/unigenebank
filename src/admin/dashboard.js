import React from 'react';
import loginlogo from "../images/logobio.png";
import AdminNavbar from './adminnavbar';
import Sidebar from './sidebar';

const Dashboard = () => {
  return ( <>
  <AdminNavbar/>
  <div>
    <div className="my-col-10 down-2">
     <div className="off-6 down-1 my-col-4">
      <div><img className="loginlogod" src={loginlogo} alt="" /></div>

     </div> 
  

    </div>

  </div>
  <Sidebar/> 
  </>
    
  );
};

export default Dashboard;

