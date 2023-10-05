import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import "./all.css";
import "./index.css";
import "./typography.css";
import Login from "./admin/login";
import Dashboard from "./admin/dashboard";
import Register from "./admin/register";
import Post from "./admin/post";
import Posts from "./admin/posts";
import Journal from "./pages/journal";
import Research from "./pages/research";
import whoweare from "./pages/whoweare";
import Ourteam from "./pages/ourteam";

function App() {

  return (
    <>

       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />
           <Route path="/research" Component={Research} />
           <Route path="/login" Component={Login} />
           <Route path="/register" Component={Register} />
           <Route path="/wp-admin/post" Component={Post} />
           <Route path="/wp-admin/dashboard" Component={Dashboard} />
           <Route path="/wp-admin/posts" Component={Posts} />
           <Route path="/dashboard" Component={Dashboard} />
           <Route path="/our-publications" Component={Journal} />
           <Route path="/who-we-are" Component={whoweare} />
           <Route path="/our-team" Component={Ourteam} />

         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
