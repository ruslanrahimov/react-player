import React from "react";
import LibrarySong from "./LibrarysSong";
import { v4 as v4uuid } from "uuid";

const Library = ({
  libraryStatus,
  setSongs,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
}) => {
  return (
    <div className="library">
      <div
        className={`library-container ${libraryStatus ? "library-active" : ""}`}
      >
        <h2 className="library__header">Library</h2>
        <div className="library__songs">
          {songs.map((song) => (
            <LibrarySong
              setSongs={setSongs}
              key={song.id}
              song={song}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              songs={songs}
              id={song.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
