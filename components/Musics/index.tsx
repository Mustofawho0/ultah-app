"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export const PlayMusic = () => {
  const [play, isPlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const musicUrl = "/music/music1.mp3";

  useEffect(() => {
    const handleClick = () => {
      isPlay(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      {/* <div>
        <ReactPlayer
          slot="media"
          src={musicUrl}
          playing
          fallback
          muted={play}
          controls={false}
          loop={true}
          onStart={() => setIsLoading(false)}
          onError={(e) => {
            console.log("Audio error:", e);
          }}
        />
      </div> */}
    </>
  );
};
