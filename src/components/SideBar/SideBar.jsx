import React, { useState } from 'react';
import logo from '../../imagens/logo.jpg';
import Search from '../Search/Search';
import Home from '../Home/Home';
import Setup from '../Setup/Setup';
import Loja from '../Loja/Loja';
import Insta from '../Insta/Insta';
import Favoritos from '../Favoritos/Favoritos';



const SideBar = () => {
  const [style, setStyle] = useState('false');
  const hancleclick = () =>{setStyle(!style);};

  const [nigth, setNigth] = useState('false');
  const darkmode = () =>{setNigth(!nigth);};

  

  return (
    <body className={nigth ? 'dark': ''}>
      <nav className={style ? 'sidebar' : 'sidebar close'}>
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
          <i className="bx bx-chevron-right toggle" onClick={hancleclick}></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <Search />
            <ul className="menu-links">
              <Home />
              <Setup />
              <Loja />
              <Insta />
              <Favoritos />
            </ul>
          </div>
          <div className="bottom-content">
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Modo Escuro</span>
              <div className="toggle-switch">
                <span className="switch" onClick={darkmode}></span>
      
              </div>
            </li>
          </div>
        </div>
      </nav>
    </body>

  );
};

export default SideBar;