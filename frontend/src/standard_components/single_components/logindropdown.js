// LoginDropdown.js

import React, { useState } from 'react';
import './loginDropdown.css'; // Assicurati che il percorso sia corretto

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function LoginDropdown({ setShowLogin, setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false); // Stato per gestire la visualizzazione del form di registrazione

    const handleLogin = async () => {
        try {
            const response = await fetch(`${backendUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                setIsLoggedIn(true);
                setShowLogin(false);
                console.log('Login riuscito!');
                // Qui puoi gestire ulteriormente la risposta del server, ad es. salvare il token
            } else {
                const message = await response.text();
                alert(`Login fallito: ${message}`);
            }
        } catch (error) {
            console.error('Errore durante il login:', error);
            alert('Errore durante il login. Controlla la console per dettagli.');
        }
    };

    const handleRegister = async () => {
        if (registerPassword !== confirmPassword) {
            alert("Le password non corrispondono.");
            return;
        }
        try {
            const response = await fetch(`${backendUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: registerEmail, password: registerPassword }),
            });
            if (response.ok) {
                alert('Registrazione riuscita. Ora puoi fare il login.');
                setShowRegister(false);
                setShowLogin(true);
            } else {
                const message = await response.text();
                alert(`Registrazione fallita: ${message}`);
            }
        } catch (error) {
            console.error('Errore durante la registrazione:', error);
            alert('Errore durante la registrazione. Controlla la console per dettagli.');
        }
    };
    

    const handleRegisterClick = () => {
        setShowRegister(true); // Mostra il form di registrazione
    };

    const handleBackToLogin = () => {
        setShowRegister(false); // Torna al form di login
    };

    const handleClose = () => {
        setShowLogin(false); // Chiudi il form di login/registrazione
    };

    return (
        <>
            <div className="overlay" onClick={handleClose}></div> {/* Overlay per oscurare il contenuto sottostante */}
            {showRegister ? (
                // Form di registrazione
                <div className="register-dropdown">
                    <input type="email" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} placeholder="Nuova Email" />
                    <input type="password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} placeholder="Nuova Password" />
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Conferma Password" />
                    <button onClick={handleRegister}>Registra</button>
                    <button className="link-button" onClick={handleBackToLogin}>Torna al Login</button>
                </div>
            ) : (
                // Form di login
                <div className="login-dropdown">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                    <button className="link-button" onClick={handleRegisterClick}>Iscriviti</button>
                </div>
            )}
        </>
    );
}

export default LoginDropdown;
