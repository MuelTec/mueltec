import React, { useState } from 'react';
import logo from '../../imagens/logo.jpg';
import Search from '../Search/Search';
import Home from '../Home/Home';
import Setup from '../Setup/Setup';
import Loja from '../Loja/Loja';
import Insta from '../Insta/Insta';
import Favoritos from '../Favoritos/Favoritos';
import Bottom from '../Bottom/Bottom';

const SideBar = () => {
  const [style, setStyle] = useState('false');

  const hancleclick = () =>{setStyle(!style);};

  return (
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
          <Bottom/>
        </div>
      </div>
    </nav>

  );
};

export default SideBar;