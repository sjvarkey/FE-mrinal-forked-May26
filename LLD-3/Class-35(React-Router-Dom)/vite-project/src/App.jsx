import "./App.css";
import About from "./components.jsx/About";
import Contact from "./components.jsx/Contact";
import Home from "./components.jsx/Home";
import Navbar from "./components.jsx/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
