import React from 'react';
import './styles.css';
import logo from '../src/imagens/logo.jpg';

import Search from './components/Search/Search';
import Home from './components/Home/Home';
import Setup from './components/Setup/Setup';
import Loja from './components/Loja/Loja';
import Insta from './components/Insta/Insta';
import Favoritos from './components/Favoritos/Favoritos';


function App() {
  return (
    <div className="App">
      <>
        <nav className="sidebar close">
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
        
          <div className="menu-bar">
            <div className="menu">
              <Search/>

              <ul className="menu-links">
                <Home />
                <Setup />
                <Loja />
                <Insta />
                <Favoritos />
              </ul> 
            </div>
            <div className="bottom-content">
              <li className="">
                <a href="#">
                  <i className="bx bx-log-out icon"></i>
                  <span className="text nav-text">Sair</span>
                </a>
              </li>

              <li className="mode">
                <div className="moon-sun">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                <span className="mode-text text">Modo Escuro</span>

                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>

        <section className="home">
          <div className="text">MuelTec</div>
        </section>
      </>
    </div>
  );
}

export default App;
