import React, { useState } from 'react';
import AboutModal from '../AboutModal/AboutModal'; 
import './Hero.css';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero" id="home">
      <video autoPlay loop muted className="hero-video">
        <source src="/images/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>

      <div className="hero-content">
        <h1>Исследуйте мир с нами</h1>
        <p>Откройте для себя новые горизонты и уникальные места.</p>
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          О нас
        </button>
      </div>

      {isModalOpen && <AboutModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default Hero;