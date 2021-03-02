import React from "react";

const LibrarySong = ({
  id,
  songs,
  isPlaying,
  audioRef,
  song,
  setCurrentSong,
  setSongs,
}) => {
  //Handler
  const selectSongHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="librarySong">
      <div
        onClick={selectSongHandler}
        className={`library__songs-container ${song.active ? "selected" : ""}`}
      >
        <img alt={song.name} className="songs__cover" src={song.cover}></img>
        <div className="songs__direction">
          <h3 className="songs__name">{song.name}</h3>
          <h4 className="songs__artist">{song.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
