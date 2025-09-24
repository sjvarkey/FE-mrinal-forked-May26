import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { useEffect, useState } from "react";
import { MovieContext } from "./components/MovieContext";


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
     <MovieContext.Provider value={{watchList , handleAddtoWatchList , setWatchList}}>
      <div>
        <BrowserRouter>
          <div className="bg-black">
            <NavBar />
          </div>

          <Routes>
            <Route
              path="/"
              element={<Movies  />}
            />
            <Route path="/watchlist" element={<WatchList/> } />
          </Routes>
        </BrowserRouter>
      </div>
      </MovieContext.Provider>
    </>
  );
}

export default App;
