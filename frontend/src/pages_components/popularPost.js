// PopularPost.js
import React from 'react';
import './popularPost.css'; // Assicurati che il percorso sia corretto
import { ReactComponent as LikesIcon } from '../materials/likes_icon.svg';

function PopularPost({ title, author, imageUrl, likes, content }) { // Aggiungi 'content' come prop
  const isValidImageUrl = imageUrl && !['self', 'default', 'image'].includes(imageUrl);

  return (
    <div className="post">
      <div className="post-content">
        <div className="post-header">
          <h3 className="post-title">{title}</h3>
          <p className="post-user">{author}</p>
        </div>
        <div className="post-likes">
          <LikesIcon className="likes-icon" />
          <span className="likes-count">{likes}</span>
        </div>
        {/* Aggiungi qui il contenuto del post */}
        {content && <p className="post-text">{content}</p>}
      </div>
      {isValidImageUrl && (
        <div className="post-image-container">
          <img src={imageUrl} alt={title} className="post-image" />
        </div>
      )}
    </div>
  );
}

export default PopularPost;
