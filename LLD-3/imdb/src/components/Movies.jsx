import React from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";

function Movies() {
  return (
    <div>
      <Banner />
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex flex-wrap gap-8 m-8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
         <MovieCard />
          <MovieCard />
           <MovieCard />
            <MovieCard />
            <MovieCard />
              <MovieCard />
            <MovieCard />
            <MovieCard />
            
      </div>
    </div>
  );
}

export default Movies;
