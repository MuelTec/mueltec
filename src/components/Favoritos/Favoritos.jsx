import React from 'react';

const Favoritos = () => {
  return (
    <div>
      <li className="nav-link">
        <a href="#">
          <i className="bx bx-heart icon"></i>
          <span className="text nav-text">Likes</span>
        </a>
      </li>
    </div>
  );
};

export default Favoritos;