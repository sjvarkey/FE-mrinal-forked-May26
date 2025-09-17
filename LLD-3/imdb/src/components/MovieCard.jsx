import React from "react";

function MovieCard({movieObj , handleAddToWatchList}) {
  return (
    <div>
      <div className="flex justify-evenly">
        <div
          className="h-[40vh] w-[180px] bg-cover bg-center rounded-2xl  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
          }}
        >

          <div onClick={()=>handleAddToWatchList(movieObj)} className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-900/60 text-white text-lg">
               &#128525;
          </div>
          <div className="text-white w-full text-center text-xl p-2 bg-gray-900/60 rounded-lg">
            {movieObj.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
