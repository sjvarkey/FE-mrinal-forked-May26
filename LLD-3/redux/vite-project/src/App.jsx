import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import ShowInventory from "./components/ShowInventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          
       
          <Route path="/" element={<Counter/>}/>
          <Route path="/inventory" element={<ShowInventory/>}/>
        </Routes>

          
      </BrowserRouter>
    </>
  );
}

export default App;
