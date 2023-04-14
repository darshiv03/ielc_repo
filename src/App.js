import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/JS/Navbar";
import Footer from "./Components/JS/Footer";

import AboutUs from "./Pages/JS/AboutUs";
import ContactUs from "./Pages/JS/ContactUs";
import Program from "./Pages/JS/Program";
import Register from "./Pages/JS/Register";
import Volunteer from "./Pages/JS/Volunteer";
import OurSummerProgram from './Pages/JS/OurSummerProgram';
import Tutor from './Pages/JS/Tutor';
import HomePage from './Pages/JS/HomePage';
import Components from './Pages/JS/Components';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/about-us" element = {<AboutUs/>}></Route>
          <Route path = "/contact-us" element = {<ContactUs/>}></Route>
          <Route path = "/program/:gradeLevel" element = {<Program color = "#E84D28" backgroundColor = "rgba(255, 146, 114, 0.2)"/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/volunteer" element = {<Volunteer/>}></Route>
          <Route path = "/our-summer-programs" element = {<OurSummerProgram/>}></Route>
          <Route path = "/become-a-tutor" element = {<Tutor/>}></Route>
          <Route path = "/components" element = {<Components/>}></Route>
          <Route path = "/our-summer-programs" element = {<OurSummerProgram/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
