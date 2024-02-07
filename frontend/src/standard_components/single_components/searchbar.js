import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../../materials/search_icon.svg';
import './searchbar.css';

function SearchBar({ onSearch }) {
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState("");
    const searchBarRef = useRef(null);

    const toggleSearchBar = () => {
        setIsActive(!isActive);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchBarRef]);

    return (
        <form ref={searchBarRef} className={`search-bar ${isActive ? 'active' : ''}`} onSubmit={handleSearch}>
            <div className="search-icon-container" onClick={toggleSearchBar}>
                <SearchIcon />
            </div>
            <input
                type="text"
                className={`search-input ${isActive ? 'active' : ''}`}
                placeholder="Cerca..."
                onChange={handleInputChange}
                value={query}
            />
        </form>
    );
}

export default SearchBar;
