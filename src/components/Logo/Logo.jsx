import React from 'react';
import logo from '../../imagens/logo.jpg';

const Logo = () => {
  
  return (
    <div>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="logo"/>
          </span>

          <div className="text header-text">
            <span className="name">MuelTec</span>
            <span>Loja de Informatíca</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle"></i>
      </header>
    </div>
  );
};

export default Logo;