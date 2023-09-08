import { BrowserRouter, Routes, Route} from "react-router-dom"
import './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Userguides from './pages/userguides';
import Research from './pages/research';
import './all.css'
import './index.css'
import './typography.css'
import whoweare from "./pages/whoweare";
import Ourteam from "./pages/ourteam";


function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar />
     <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/userguide" exact Component={Userguides} />
      <Route path="/research" exact Component={Research} />
      <Route path="/who-we-are" exact Component={whoweare} />
      <Route path="/our-team" exact Component={Ourteam} />
     </Routes>
     <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
