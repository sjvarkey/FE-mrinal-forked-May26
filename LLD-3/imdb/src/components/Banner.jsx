import React from "react";

function Banner() {
  return (
    <div
      className="h-[65vh] bg-cover bg-center flex items-end "
      style={{
        backgroundImage: `url(https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg)`,
      }}
    >
        <div className="w-full text-white text-3xl text-center">
            Movie Title Goes Here
        </div>
    </div>
  );
}

export default Banner;
