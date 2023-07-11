import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Home from '../Home/Home';
import Setup from '../Setup/Setup';
import Loja from '../Loja/Loja';
import Insta from '../Insta/Insta';
import Favoritos from '../Favoritos/Favoritos';
import Bottom from '../Bottom/Bottom';

const SideBar = () => {
  return (
    <nav className="sidebar close">
      <Logo/>
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