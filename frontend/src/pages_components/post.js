// Assicurati che le importazioni siano corrette
import React from 'react';
import './post.css';
import { ReactComponent as LikesIcon } from '../materials/likes_icon.svg';

function Post({ title, author, imageUrl, likes }) {
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
          </div>  
        {isValidImageUrl && (
            <div className="post-image-container">
                <img src={imageUrl} alt={title} className="post-image" />
            </div>
        )}
    </div>
  );
}

export default Post;

