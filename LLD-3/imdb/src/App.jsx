import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { useEffect, useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddtoWatchList(movieObj) {
    
    let updatedWatchList = [...watchList, movieObj];
    setWatchList(updatedWatchList);
    localStorage.setItem("wlmovies", JSON.stringify(updatedWatchList));
  }

  useEffect(() => {
    const movies = localStorage.getItem("wlmovies");
    setWatchList(JSON.parse(movies)||[]);
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-black">
            <NavBar />
          </div>

          <Routes>
            <Route
              path="/"
              element={<Movies handleAddtoWatchList={handleAddtoWatchList} watchList={watchList}  />}
            />
            <Route path="/watchlist" element={<WatchList watchList={watchList} setWatchList={setWatchList}/> } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
