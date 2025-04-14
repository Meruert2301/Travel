import React, { useState } from 'react';
import './AuthModal.css';

function AuthModal({ onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Вход:', loginFormData);
    alert('Вы успешно вошли!');
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerFormData.password !== registerFormData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    console.log('Регистрация:', registerFormData);
    alert('Вы успешно зарегистрировались!');
    onClose();
  };

  return (
    <div className="auth-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        {isLoginMode ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginFormData.email}
                onChange={handleLoginChange}
                placeholder="Введите ваш email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                onChange={handleLoginChange}
                placeholder="Введите пароль"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Войти
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => setIsLoginMode(false)}
            >
              Зарегистрироваться
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={registerFormData.name}
                onChange={handleRegisterChange}
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerFormData.email}
                onChange={handleRegisterChange}
                placeholder="Введите ваш email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Придумайте пароль:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerFormData.password}
                onChange={handleRegisterChange}
                placeholder="Введите пароль"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Подтвердите пароль:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerFormData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Подтвердите пароль"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Зарегистрироваться
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthModal;