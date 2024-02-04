// File: UserProfile.js

import React, { useState } from 'react';
import Default_profilePic from '../../materials/user_image.svg'; // Percorso alla tua immagine del profilo
import './user.css'; // Percorso al tuo file CSS per UserProfile

function UserProfile() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="user-profile-container">
            <div className="profile-pic-container" onClick={toggleDropdown}>
                <img src={Default_profilePic} alt="Profile" className="profile-pic" />
            </div>
            {isDropdownVisible && (
                <div className="dropdown-menu">
                    {/* Elementi del menu a discesa */}
                    {/* Esempio: <a href="/profile">Il Mio Profilo</a> */}
                </div>
            )}
        </div>
    );
}

export default UserProfile;
