import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Tours from "./Tours";
import Experiences from "./Experiences";
import Blogs from "./Blogs";
import Destination from "./Destination";

function App() {
  return (
    <div className="H">
      <NavBar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;
