import React from 'react';

const ModeDark = () => {
  return (
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
  );
};

export default ModeDark;