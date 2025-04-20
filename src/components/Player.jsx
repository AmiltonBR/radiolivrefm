import React from 'react';

export default function Player() {
  return (
    <div className="player">
      <audio controls autoPlay>
        <source src="https://example.com/stream.mp3" type="audio/mpeg" />
        Seu navegador não suporta o player de áudio.
      </audio>
    </div>
  );
}
