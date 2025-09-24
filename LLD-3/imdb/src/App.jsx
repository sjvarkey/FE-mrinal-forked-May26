import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

function App() {
  return (
    <>
      <div >
        <BrowserRouter>
         <div className="bg-black">
          <NavBar />
          </div>

          <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/watchlist" element={<WatchList/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
