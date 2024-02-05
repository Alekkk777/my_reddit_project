import React, { useState, useRef, useEffect} from 'react';
import { ReactComponent as SearchIcon } from '../../materials/search_icon.svg'; // Assicurati di avere questo SVG
import './searchbar.css'; // Il tuo file CSS


function SearchBar() {
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState("");
    const searchBarRef = useRef(null);  // Ref per il componente searchBar

    const toggleSearchBar = () => {
        setIsActive(!isActive);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Chiudi la barra di ricerca quando si clicca al di fuori
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        // Aggiungi l'event listener quando il componente viene montato
        document.addEventListener('mousedown', handleClickOutside);

        // Rimuovi l'event listener quando il componente viene smontato
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
