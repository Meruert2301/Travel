import React, { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal'; 
import './Header.css'; 

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logoberkut.png" alt="EagleTrip Logo" className="logo-image" />
          Eagle<span>Trip</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Главная</a></li>
          <li><a href="#destinations">Направления</a></li>
          <li><a href="#guides">Гиды</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li>
            <a
              href="#login/registration"
              onClick={(e) => {
                e.preventDefault(); 
                setIsModalOpen(true); 
              }}
            >
              Вход/Регистрация
            </a>
          </li>
        </ul>
      </nav>

      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}

export default Header;