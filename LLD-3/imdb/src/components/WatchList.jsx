import React from "react";

function WatchList({ watchList }) {
  return (
    <div>
      {/* Search Bar */}

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
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
                <th className="px-6 py-3">Ratings</th>
                <th className="px-6 py-3">Popularity</th>
                <th className="px-6 py-3">Genre</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {watchList.map((movie) => (
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <img
                      className="h-24 w-40 rounded-md  object-fit shadow"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="poster"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {movie.title}
                  </td>
                  <td className="px-6 py-4 text-center">{movie.vote_average}</td>
                  <td className="px-6 py-4 text-center">{movie.popularity}</td>
                  <td className="px-6 py-4 text-center">Action</td>
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
