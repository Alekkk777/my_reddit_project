import React from 'react';
import './communityCard.css';
import { ReactComponent as UsersIcon } from '../materials/community_icon.svg'; // Aggiusta il percorso

function CommunityCard({ rank, name, description, subscribers }) {
  return (
    <div className="community-card">
      <div className="community-rank">{rank}°</div> {/* Visualizza il posizionamento */}
      <div className="community_identity">
        <h3 className="community-name">{name}</h3>
        <p className="community-description">{description}</p>
      </div>
      <div className="community-stats">
        <UsersIcon className="users-icon" /> {/* Visualizza l'icona degli utenti */}
        <span className="community-subscribers">{subscribers.toLocaleString()} subscribers</span> {/* Visualizza il numero di iscritti con separatore delle migliaia */}
      </div>
    </div>
  );
}

export default CommunityCard;
