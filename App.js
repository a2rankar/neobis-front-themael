
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import MealDescriptionPage from './pages/MealDescriptionPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDescriptionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
