
import React from 'react';

function Controls({ onPrev, onPlayPause, onNext, isPlaying, colors }) {
	return (
	  <div className="controls">
		<button
		  className="btn backward-btn"
		  onClick={onPrev}
		  style={{ backgroundColor: colors.mix }}
		>
		  <svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="13.000000pt"
			height="21.000000pt"
			viewBox="0 0 13.000000 21.000000"
			preserveAspectRatio="xMidYMid meet"
		  >
			<g
			  className="pre-arr"
			  transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
			  fill={colors.dark}
			  stroke="none"
			>
			  <path d="M46 156 c-20 -23 -36 -47 -36 -51 0 -15 71 -95 85 -95 28 0 26 23 -4 54 -17 18 -31 36 -31 41 0 5 14 23 31 41 30 31 32 54 4 54 -7 0 -30 -20 -49 -44z" />
			</g>
		  </svg>
		</button>
		
		<button
		  className={`play-btn ${isPlaying ? "" : "pause"}`}
		  onClick={onPlayPause}
		  style={{ backgroundColor: colors.mix }}
		>
		  <span style={{background: colors.dark}}></span>
		  <span style={{backgroundColor: colors.dark}}></span>
		</button>
		
		<button
		  className="btn forward-btn"
		  onClick={onNext}
		  style={{ backgroundColor: colors.mix }}
		>
		  <svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="13.000000pt"
			height="21.000000pt"
			viewBox="0 0 13.000000 21.000000"
			preserveAspectRatio="xMidYMid meet"
		  >
			<g
			  className="nxt-arr"
			  transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
			  fill={colors.dark}
			  stroke="none"
			>
			  <path d="M15 189 c-4 -6 6 -27 22 -47 l30 -37 -30 -38 c-24 -29 -28 -40 -19 -49 9 -9 22 -2 57 32 25 24 45 49 45 54 0 12 -80 96 -91 96 -5 0 -11 -5 -14 -11z" />
			</g>
		  </svg>
		</button>
	  </div>
	);
  }
  
  export default Controls;
  