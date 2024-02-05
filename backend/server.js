const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Assicurati che il percorso sia corretto

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname'; // Fallback a un valore locale se non è impostato
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connesso con successo"))
  .catch(err => console.error("Errore di connessione al database", err));

// Usa le route di autenticazione
app.use(authRoutes);

// Avvia il server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
