import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaBookMedical,
    FaRegFileWord,
    FaRegChartBar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/wp-admin/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/wp-admin/post",
            name:"Post",
            icon:<FaRegFileWord/>
        },
        {
          path:"/wp-admin/posts",
          name:"Posts",
          icon:<FaBookMedical/>
        },
        {
            path:"/wp-admin/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="iconb">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;