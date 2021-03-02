import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <div className="song-container">
        <img
          alt={currentSong.name}
          className="song__cover"
          src={currentSong.cover}
        ></img>
        <h2 className="song__name">{currentSong.name}</h2>
        <h3 className="song__artist-name">{currentSong.artist}</h3>
      </div>
    </div>
  );
};

export default Song;
