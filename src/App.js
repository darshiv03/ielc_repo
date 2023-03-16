import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/JS/Navbar";
import Footer from "./Components/JS/Footer";

import AboutUs from "./Pages/JS/AboutUs";
import ContactUs from "./Pages/JS/ContactUs";
import Program from "./Pages/JS/Program";
import HomePage from "./Pages/JS/HomePage";
import Register from "./Pages/JS/Register";
import Volunteer from "./Pages/JS/Volunteer";
import Components from './Pages/JS/Components';
import DropDown from "./Components/JS/DropDown"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DropDown/>
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/about-us" element = {<AboutUs/>}></Route>
          <Route path = "/contact-us" element = {<ContactUs/>}></Route>
          <Route path = "/program/:gradeLevel" element = {<Program/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/volunteer" element = {<Volunteer/>}></Route>
          <Route path = "/components" element = {<Components/>}></Route>
        </Routes>
      </Router>
      <Footer backgroundColor = "red"/>
    </div>
  );
}

export default App;
