import React, { useEffect, useRef, useState, useCallback } from 'react';
import Controls from './Controls';
import SongSlider from './SongSlider';
import { songs } from '../songs';
import { calculateMixColor } from '../utils/colorUtils';

function AudioPlayer() {
  const musicRef = useRef(new Audio());

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [colors, setColors] = useState({ dark: '#000', light: '#000', mix: '#000' });

  const handleMetadataLoad = useCallback(() => setDuration(musicRef.current.duration), []);
  const handleTimeUpdate = useCallback(() => setCurrentTime(musicRef.current.currentTime), []);

  useEffect(() => {
    setMusic(0);
  }, []);

  useEffect(() => {
    const music = musicRef.current;
    music.addEventListener('loadedmetadata', handleMetadataLoad);
    music.addEventListener('timeupdate', handleTimeUpdate);
    music.addEventListener('ended', nextHandler);

    return () => {
      music.removeEventListener('loadedmetadata', handleMetadataLoad);
      music.removeEventListener('timeupdate', handleTimeUpdate);
      music.removeEventListener('ended', nextHandler);
    };
  });

  const setMusic = (index) => {
    const song = songs[index];
    musicRef.current.src = `/audios/${song.artist} - ${song.name}.mp3`;
    setCurrentTime(0);

    const darkColor = `rgb(${song.colors.dark.join(',')})`;
    const lightColor = `rgb(${song.colors.light.join(',')})`;
    const mixColor = calculateMixColor(song.colors.dark, song.colors.light);

    setColors({ dark: darkColor, light: lightColor, mix: mixColor });
    document.body.style.backgroundImage = `url('./images/blurred_covers/${song.cover}')`;
  };

  const playPauseHandler = () => {
    if (isPlaying) {
      musicRef.current.pause();
    } else {
      musicRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextHandler = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setMusic(nextIndex);
    setIsPlaying(true);
    musicRef.current.play();
  };

  const prevHandler = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setMusic(prevIndex);
    setIsPlaying(true);
    musicRef.current.play();
  };

  const onSeek = (e) => {
    musicRef.current.currentTime = e.target.value;
    setCurrentTime(musicRef.current.currentTime);
  };

  return (
    <div className="music-player" style={{ color: colors.mix }}>
      <h1 className="song-name">{songs[currentSongIndex].name}</h1>
      <p className="artist-name">{songs[currentSongIndex].artist}</p>
      <div className="cover" style={{ backgroundImage: `url('./images/covers/${songs[currentSongIndex].cover}')` }}></div>

      <SongSlider
        currentTime={currentTime}
        duration={duration}
        colors={colors}
        onSeek={onSeek}
      />

      <Controls 
        onPrev={prevHandler}
        onPlayPause={playPauseHandler}
        onNext={nextHandler}
        isPlaying={isPlaying}
        colors={colors}
      />

    </div>
  );
}

export default AudioPlayer;
