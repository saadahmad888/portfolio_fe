'use client'; // Required for client-side functionality

import { useState, useRef, useEffect } from 'react';
import Pause from "../../../public/images/icons/pause.svg";
import play from "../../../public/images/icons/play.svg";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.muted = true; // Initially mute the audio
        }
    }, [audioRef]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.muted = false; // Unmute the audio on play
                audio.play().catch((err) => {
                    console.error("Play failed:", err);
                });
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            <audio ref={audioRef} loop muted>
                <source src="/audio/background.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>

            {/* <button onClick={handlePlayPause}>
                {isPlaying ? '<Image src={Pause} alt="Pauese"/>' : '<Image src={Play} alt="Play"/>'}
            </button> */}
            <button
                onClick={handlePlayPause}
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    zIndex: 1000,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                }}
            >
                <img
                    src={isPlaying ? "/images/icons/pause.svg" : "/images/icons/play.svg"}
                    alt={isPlaying ? "Pause" : "Play"}
                    style={{ width: '50px', height: '50px' }}
                />
            </button>
        </>
    );
}