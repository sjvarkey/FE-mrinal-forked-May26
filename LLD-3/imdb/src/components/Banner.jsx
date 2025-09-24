import React, { useEffect, useState } from "react";

function Banner() {

  const [url , setUrl]= useState(null)

 const imageurls = [ 'https://image.tmdb.org/t/p/original/1BpjcVIztlsk0mym7OLF6CW97eh.jpg',
    'https://image.tmdb.org/t/p/original/zxi6WQPVc0uQAG5TtLsKvxYHApC.jpg',
    'https://image.tmdb.org/t/p/original/28zX1DO1NJWeS1e573lSJQ9kiVh.jpg',]

 useEffect(()=>{
   function fetchImage(){
    //  const url = 
    // fetch and set a random url from the array
    setUrl(url)
  }
  fetchImage()
 }, [])

  return (
    <div
      className="relative h-[70vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg)`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          X-Men:Apocalypse
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          A short description of the movie goes here. Keep it engaging and concise 
          so users want to click play.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition">
            ▶ Watch Now
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-semibold shadow-md transition">
            + Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
