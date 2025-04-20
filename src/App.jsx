import React from 'react';
import Player from './components/Player';

export default function App() {
  return (
    <div className="container">
      <header>
        <img src="/img/banner.jpg" alt="Rádio FM Livre" className="banner" />
        <h1>Bem-vindo à Rádio FM Livre</h1>
        <p>Transmitindo boa música e informação ao vivo para todo o Brasil</p>
      </header>
      <main>
        <Player />
        <section className="info">
          <h2>📅 Programação</h2>
          <ul>
            <li><strong>08h às 10h:</strong> Manhã News</li>
            <li><strong>10h às 12h:</strong> Top Hits</li>
            <li><strong>14h às 16h:</strong> Especial Flashback</li>
            <li><strong>18h às 20h:</strong> Voz do Brasil</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Rádio FM Livre - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
