// models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = process.env.BCRYPT_SALT_ROUNDS;  // Puoi aumentare per più sicurezza, ma richiederà più tempo per l'hashing

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hashing della password prima di salvare l'utente nel database
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);
