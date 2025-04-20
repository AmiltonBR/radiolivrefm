import React from 'react';
import Player from '../components/Player';

export default function Home() {
  return (
    <div className='text-center p-10'>
      <h1 className='text-3xl font-bold mb-4'>Rádio FM Livre</h1>
      <Player />
    </div>
  );
}