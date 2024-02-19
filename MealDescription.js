
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MealDescription() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal:', error);
      }
    };
    fetchMeal();
  }, [id]);

  return (
    <div className="meal-description">
      {meal && (
        <>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>Category: {meal.strCategory}</p>
          <p>Country: {meal.strArea}</p>
          <p>Ingredients:</p>
          <ul>
            {Object.entries(meal)
              .filter(entry => entry[0].startsWith('strIngredient') && entry[1] !== '')
              .map((entry, index) => (
                <li key={index}>{entry[1]} - {meal[`strMeasure${index + 1}`]}</li>
              ))}
          </ul>
          <p>Instructions: {meal.strInstructions}</p>
        </>
      )}
    </div>
  );
}

export default MealDescription;
