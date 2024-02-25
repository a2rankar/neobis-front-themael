
import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

function MealDescriptionPage() {
  
  const { id } = useParams();

  return (
    <div>
      <RecipeDetails id={id} />
    </div>
  );
}

export default MealDescriptionPage;
