import React, { useState } from 'react';
import StComponents from '../standard_components/st_components';
import './new_post.css'; // Assumi di avere un file NewPost.css per gli stili

function NewPost() {
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <div>
            <StComponents />
            <div className="new-post-container">
                <h2>Aggiungi un nuovo Post</h2>
                <form onSubmit={handleSubmit} className="new-post-form">
                    <div className="form-group">
                        <label>Titolo</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Descrizione</label>
                        <textarea required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Contenuto</label>
                        <textarea required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Carica Immagine</label>
                        <input type="file" />
                    </div>
                    <button type="submit" className="submit-btn">Invia Post</button>
                </form>
                {showMessage && <p className="confirmation-message">Post inviato!</p>}
            </div>
        </div>
    );
}

export default NewPost;
