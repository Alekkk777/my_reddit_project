// File: /src/components/Sidebar/Sidebar.js

import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import LogoutDialog from './logout';
import './sidebar.css'; // Assicurati che il percorso sia corretto
import LogoDesktop from '../../materials/reddit_logo_desktop.svg'; // Percorso al tuo logo per desktop
import LogoMobile from '../../materials/reddit_logo_mobile.svg'; // Percorso al tuo logo per mobile
import { ReactComponent as HomeIcon } from '../../materials/home_icon.svg';
import { ReactComponent as PopularIcon } from '../../materials/fire_icon.svg';
import { ReactComponent as CommunityIcon } from '../../materials/community_icon.svg';
import { ReactComponent as PlusIcon } from '../../materials/plus_icon.svg';
import { ReactComponent as LogoutIcon } from '../../materials/exit_icon.svg';

function Sidebar({ setIsLoggedIn }) {
  const [selected] = useState('home');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true); // Mostra il dialogo di conferma del logout
  };

  const handleConfirmLogout = async () => {
    // Qui invii la richiesta di logout al server
    // Esempio di fetch() omesso per brevità
    setIsLoggedIn(false); // Aggiorna lo stato di autenticazione
    setShowLogoutDialog(false); // Chiudi il dialogo di conferma del logout
    // Qui puoi anche reindirizzare l'utente alla pagina di login se necessario
  };

  const handleCancelLogout = () => {
    setShowLogoutDialog(false); // Chiudi il dialogo di conferma del logout
  };

  return (
    <> 
      {/* Logo mobile separato dalla sidebar */}
      <div className="logo-mobile-container">
        <NavLink to="/home">
          <img src={LogoMobile} className="logo logo-mobile" alt="Mobile Logo" />
        </NavLink>
      </div>

      {/* Sidebar contiene solo il logo desktop e le icone */}
      <div className="sidebar">
        <div className="logo-container">
          <NavLink to="/home">
            <img src={LogoDesktop} className="logo logo-desktop" alt="Desktop Logo" />
          </NavLink>
        </div>
        <div className="menu-items">
          {/* Utilizzo della prop className con una funzione che riceve { isActive } per gestire gli stili attivi */}
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'icon selected' : 'icon')}>
            <div>
              <HomeIcon />
            </div>
          </NavLink>
          <NavLink to="/popular" className={({ isActive }) => (isActive ? 'icon selected' : 'icon')}>
            <div className="icon-container">
              <PopularIcon />
            </div>
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => (isActive ? 'icon selected' : 'icon')}>
            <div>
              <CommunityIcon />
            </div>
          </NavLink>
          <NavLink to="/new-post" className={({ isActive }) => (isActive ? 'icon selected' : 'icon')}>
            <div>
              <PlusIcon />
            </div>
          </NavLink>
          {/* Assumi che "logout" sia un'azione e non una pagina, quindi usiamo onClick */}
          <div className={`icon last-icon ${selected === 'logout' ? 'selected' : ''}`} onClick={handleLogoutClick}>
            <LogoutIcon />
          </div>
          {showLogoutDialog && (
            <LogoutDialog onConfirmLogout={handleConfirmLogout} onCancelLogout={handleCancelLogout} />
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
