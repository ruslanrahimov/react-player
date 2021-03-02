import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    //Correcting time
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (duration) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (duration === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (duration === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  //Add style

  const animTrack = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="player-container">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <div
            style={{
              background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
            }}
            className="track"
          >
            <input
              onChange={dragHandler}
              min={0}
              max={songInfo.duration || 0}
              value={songInfo.currentTime}
              type="range"
            />
            <div style={animTrack} className="animated-track"></div>
          </div>
          <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-back")}
            className="icon-back"
            icon={faAngleLeft}
            size="2x"
          />
          <FontAwesomeIcon
            className="icon-play"
            onClick={playSongHandler}
            icon={isPlaying ? faPause : faPlay}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={() => skipTrackHandler("skip-forward")}
            className="icon-forward"
            icon={faAngleRight}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
