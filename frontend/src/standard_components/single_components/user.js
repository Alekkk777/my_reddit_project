// File: UserProfile.js

import React, { useState } from 'react';
import Default_profilePic from '../../materials/user_image.svg'; // Percorso alla tua immagine del profilo
import LoginDropdown from './logindropdown'; // Assicurati che il percorso sia corretto
import './user.css'; // Percorso al tuo file CSS per UserProfile

function UserProfile() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Aggiunto per gestire lo stato di login
    const [showLogin, setShowLogin] = useState(false); // Stato per mostrare/nascondere il form di login

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLoginClick = () => {
        setShowLogin(true); // Mostra il form di login
    };

    return (
        <div className="user-profile-container">
            {isLoggedIn ? (
                <>
                    <div className="profile-pic-container" onClick={toggleDropdown}>
                        <img src={Default_profilePic} alt="Profile" className="profile-pic" />
                    </div>
                    {isDropdownVisible && (
                        <div className="dropdown-menu">
                            {/* Elementi del menu a discesa */}
                            {/* Esempio: <a href="/profile">Il Mio Profilo</a> */}
                        </div>
                    )}
                </>
            ) : (
                <button className="login-button" onClick={handleLoginClick}>Accedi</button>
            )}
            {showLogin && (
                <LoginDropdown setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    );
}

export default UserProfile;

