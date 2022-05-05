import React, {ChangeEventHandler} from "react";

import './search-box.styles.css'

interface ISearchBoxProps {
    className: string,
    placeholder?: string,
    onSearchChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({onSearchChange, className, placeholder}: ISearchBoxProps) =>
  <input
    className={`search-box ${className}`}
    type={'search'}
    placeholder={placeholder}
    onChange={onSearchChange}/>


export default SearchBox;