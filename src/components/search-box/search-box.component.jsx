import React from "react";

import './search-box.styles.css'

const SearchBox = ({onSearchChange, className, placeholder}) =>
  <input
    className={`search-box ${className}`}
    type={'search'}
    placeholder={placeholder}
    onChange={onSearchChange}/>


export default SearchBox;