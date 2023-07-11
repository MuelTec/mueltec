import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div>
      <li>
        <i className="search-box">
          <input type="text"placeholder="Pesquisar"/>
        </i>
      </li>
    </div>
  );
};

export default Search;