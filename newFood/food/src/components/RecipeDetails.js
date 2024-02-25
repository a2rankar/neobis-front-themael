// src/components/RecipeDetails.js
import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <section>
      {recipe ? (
        <div>
          <h2>{recipe.strMeal}</h2>
          <p>Category: {recipe.strCategory}</p>
          <p>Country: {recipe.strArea}</p>
          <p>Instructions: {recipe.strInstructions}</p>
          <p>Ingredients:</p>
          <ul>
            {Object.entries(recipe)
              .filter(([key, value]) => key.startsWith('strIngredient') && value)
              .map(([key, value], index) => (
                <li key={index}>{value} - {recipe[`strMeasure${index + 1}`]}</li>
              ))}
          </ul>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
       <Link to={`/recipe/${id}`}><p>Просмотреть подробную информацию</p></Link>
    </section>
  );
}

export default RecipeDetails;
