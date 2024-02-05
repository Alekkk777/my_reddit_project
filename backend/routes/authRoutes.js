// authRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assicurati che il percorso sia corretto
const router = express.Router();

// Route di Registrazione
router.post('/register', async (req, res) => {
    try {
        // Hash della password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // Creazione del nuovo utente
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword // Salviamo la password hashata
        });

        // Salvataggio dell'utente nel database
        await newUser.save();
        res.status(201).send("Utente registrato con successo!");
    } catch (error) {
        res.status(500).send("Errore durante la registrazione dell'utente: " + error.message);
    }
});

// Route di Login
router.post('/login', async (req, res) => {
    try {
        // Cerchiamo l'utente tramite email
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            return res.status(401).send("Credenziali non valide.");
        }

        // Confrontiamo la password inviata con quella hashata nel database
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send("Credenziali non valide.");
        }

        // L'utente è autenticato correttamente
        // Qui puoi generare un token JWT o una sessione, a seconda delle tue esigenze
        res.send("Login riuscito!");
    } catch (error) {
        res.status(500).send("Errore durante il login: " + error.message);
    }
});

// Route di Logout
router.post('/logout', (req, res) => {
    // Se stai usando le sessioni:
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send("Errore durante il logout.");
            }
            res.clearCookie('nomeCookieSessione'); // Sostituisci con il nome del tuo cookie di sessione
            res.send("Logout riuscito.");
        });
    } else {
        // Se stai usando JWT:
        // Qui non c'è molto da fare lato server a meno che tu non abbia una blacklist di token
        res.status(200).send("Logout riuscito. Rimuovi il token lato client.");
    }
});

module.exports = router;
