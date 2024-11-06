import React, { useEffect } from 'react';

function SongSlider({ currentTime, duration, darkColor, lightColor, onSeek }) {

  useEffect(() => {
    const seekBar = document.querySelector('.seek-bar');
    if (seekBar) {
      seekBar.style.setProperty('--thumb-color', darkColor);
    }
  }, [darkColor]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="song-slider">
      <input
        type="range"
        className="seek-bar"
        value={currentTime}
        max={duration}
        onChange={onSeek}
        style={{background: lightColor}}
      />
      <span className="current-time">{formatTime(currentTime)}</span>
      <span className="song-duration">{formatTime(duration)}</span>
    </div>
  );
}

export default SongSlider;
