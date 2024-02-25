import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./MealOfTheDay.css"

function MealOfTheDay() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealOfTheDay = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setMeal(response.data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal of the day:', error);
        setLoading(false);
      }
    };
    fetchMealOfTheDay();
  }, []);

  return (
    <div className="meal-of-the-day">
    
      {loading ? (
        <p>Loading meal of the day...</p>
      ) : meal ? (
        <Link to={`/meal/${meal.idMeal}`}>
          <div className="meal-info">
    
            <div className='desc'>
            <p><h2>Meal of the Day</h2></p>
              <h3>{meal.strMeal}</h3>
              <div className='category-area'>
                <p> {meal.strCategory}</p>
                <span>|</span>
                <p> {meal.strArea}</p>
              </div>
         
            </div>
            <div className='image'>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          </div>
        </Link>
      ) : (
        <p>Meal of the day not found.</p>
      )}
    </div>
  );
}

export default MealOfTheDay;


// // src/components/MealOfTheDay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MealOfTheDay() {
//   const [meal, setMeal] = useState(null);

//   useEffect(() => {
//     const fetchRandomMeal = async () => {
//       try {
//         const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
//         const randomMeal = response.data.meals[0];
//         setMeal(randomMeal);
//       } catch (error) {
//         console.error('Error fetching random meal:', error);
//       }
//     };

//     fetchRandomMeal();
//   }, []);

//   return (
//     <section>
//       <h2>Meal of the Day</h2>
//       {meal ? (
//         <div>
//           <h3>{meal.strMeal}</h3>
//           <p>Category: {meal.strCategory}</p>
//           <p>Country: {meal.strArea}</p>
//           <p>Tags: {meal.strTags}</p>
//           <img src={meal.strMealThumb} alt={meal.strMeal} />
//         </div>
//       ) : (
//         <p>Loading meal...</p>
//       )}
//     </section>
//   );
// }

// export default MealOfTheDay;
