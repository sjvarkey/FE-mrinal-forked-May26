import React, { use, useEffect, useState } from "react";
import { genreids } from "../utlities";

function WatchList({ watchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList , setGenreList] = useState([])

  console.log(search);

  function handleAscending() {
    let sortAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });

    setWatchList([...sortAscending]);
  }

  function handleDescending() {
    let sortDescending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });

    setWatchList([...sortDescending]);
  }


  useEffect(()=>{
     let temp =  watchList.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]]
      })

     const uniqueGenres =  new Set(temp)
     console.log(uniqueGenres)
     const genres = ["All Genres", ...uniqueGenres]
     console.log(genres)
     setGenreList[genres]
  }, [watchList])

  return (
    <div>
      {/* Search Bar */}

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* This is the watchlist table */}
      <div className="m-8">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wider">
              <tr>
                <th className="px-6 py-3 text-left">Poster</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 ">
                  <i
                    onClick={handleAscending}
                    className="fa-solid fa-arrow-up m-2"
                  ></i>
                  Ratings <i onClick={handleDescending} className="fa-solid fa-arrow-down m-2"></i>
                </th>
                <th className="px-6 py-3">Popularity</th>
                <th className="px-6 py-3">Genre</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {watchList
                .filter((movie) =>
                  movie.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((movie) => (
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <img
                        className="h-24 w-40 rounded-md  object-fit shadow"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="poster"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium">{movie.title}</td>
                    <td className="px-6 py-4 text-center">
                      {movie.vote_average}{" "}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movie.popularity}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {genreids[movie.genre_ids[0]]}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-red-600 font-semibold hover:text-red-800 transition">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
