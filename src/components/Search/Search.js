import React from "react";

import './Search.css';
import search__icon from '../../images/search__icon.svg';

function Search(props) {
    const [search, setSearch] = React.useState('');

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function searchFormSubmit(e) {
        e.preventDefault();
        props.onSearch(search);
        setSearch('')
    }

    return (
            <div className="search">
                <form className="search__form" onSubmit={searchFormSubmit}>

                    <fieldset className="search__form-fields">
                        <img src={search__icon} alt="Поиск" className="search__icon"/>
                        <input type="text" name="search" placeholder="Поиск" className="search__form-input"
                               value={search || ''} onChange={handleSearchChange} required/>
                    </fieldset>
                    <button className="search__form-button" type="submit">Найти</button>
                </form>

        </div>
    )
}

export default Search;