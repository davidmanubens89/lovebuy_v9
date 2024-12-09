import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { HeadphonesRecommendation } from './pages/HeadphonesRecommendation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recommendation/headphones" element={<HeadphonesRecommendation />} />
      </Routes>
    </Router>
  );
}

export default App;