// SearchPanel.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchPanel.css'

function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      setSearchResults(response.data.meals);
    } catch (error) {
      console.error('Error searching meals:', error);
    }
  };

  return (
    <div className="search-panel">
      <div className='block-input'>
        <h2>Find Your Meal</h2>
        <input type="text" placeholder="Find your meal  " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {searchResults.map(meal => (
          <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
            <div className="meal-info">
              <div className='desc'>
                <h3>{meal.strMeal}</h3>
                <p>Category: {meal.strCategory}</p>
                <p>Country: {meal.strArea}</p>
              </div>
              <div className='image'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchPanel;
