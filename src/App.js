// File: /src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home.js'; // Il componente che vuoi mostrare quando l'URL è /home
import PopularPage from './pages/popular.js'; // Il componente per /popular
import CommunityPage from './pages/community.js'; // Il componente per /popular
import NewpostPage from './pages/new_post.js'; // Il componente per /popular
import './App.css'; // Stili globali per l'app


function App() {
  return (
    <Router>
      <div className="App">
        <main className="content">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/new-post" element={<NewpostPage />} />
            {/* Definisci altre rotte qui */}
            {/* Reindirizza eventuali percorsi non gestiti alla HomePage */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
