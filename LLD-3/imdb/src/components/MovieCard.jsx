import React from "react";

function MovieCard({movieTitle , posterPath}) {
  return (
    <div>
 
      <div className="flex justify-evenly">
        <div
          className="h-[40vh] w-[180px] bg-cover bg-center rounded-2xl  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
          }}
        >
         <div className="text-white w-full text-center text-xl p-2 bg-gray-900/60 rounded-lg" >
               {movieTitle}
         </div>
         
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
