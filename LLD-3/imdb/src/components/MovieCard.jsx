import React from "react";

function MovieCard({movieTitle}) {
  return (
    <div>
 
      <div className="flex justify-evenly">
        <div
          className="h-[40vh] w-[180px] bg-cover bg-center rounded-2xl  "
          style={{
            backgroundImage: `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`,
          }}
        >
            {movieTitle}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
