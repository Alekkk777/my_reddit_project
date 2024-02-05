// File: LogoutDialog.js

import React from 'react';
import './logout.css'; // Assicurati che il percorso sia corretto

function LogoutDialog({ onConfirmLogout, onCancelLogout }) {
  return (
    <div className="logout-dialog-overlay">
      <div className="logout-dialog">
        <p className="logout-dialog-message">Sei sicuro di voler uscire?</p>
        <div className="logout-dialog-buttons">
          <button className="logout-dialog-confirm" onClick={onConfirmLogout}>
            Sì
          </button>
          <button className="logout-dialog-cancel" onClick={onCancelLogout}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutDialog;
