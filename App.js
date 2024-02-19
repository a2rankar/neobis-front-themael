// // import React from 'react';
//  import './App.css';
// import Header from './head/head';
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //        <a href='#'><h2>The Meal</h2></a> 
// //       </header>
// //       <div className='Home'>
// //         <div className='text-part'><h2>Meal of the <br />day</h2>
// //         <a href='#'><h1>Three-chees souffles</h1></a></div>
// //         <div className='image-part'></div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [meals, setMeals] = useState([]);
//   const [error, setError] = useState(null);

//   const searchMeal = async () => {
//     try {
//       const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
//       const data = response.data;
//       if (data.meals) {
//         setMeals(data.meals);
//         setError(null);
//       } else {
//         setMeals([]);
//         setError("No meals found.");
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError("Error fetching data.");
//     }
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     searchMeal();
//   };

//   return (
//     <div className="App">
//       {/* <div className='meal-blocktext'> </div>*/}
//       {/* <header className="App-header">
//         <a href='#'><h2>The Meal</h2></a>
//       </header> */}
//       {Header}
//       <div className='Home'>
//         <div className='text-part'>
//           <h2>Meal of the <br />day</h2>
//           <a href='#'><h1>Three-cheese soufflés</h1></a>
//         </div>
//         <div className='image-part'></div>
//       </div>

//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           placeholder="Search for a meal"
//           value={searchTerm}
//           onChange={handleSearchInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {error && <p>{error}</p>}
//       <div>
//         {meals.map(meal => (
//           <div key={meal.idMeal}>
//             <h2>{meal.strMeal}</h2>
//             <img src={meal.strMealThumb} alt={meal.strMeal} />
//             <p>{meal.strInstructions}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import Home from '../pages/Home';
import MealDescriptionPage from './pages/MealDescriptionPage';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MealOfTheDay from './components/MealOfTheDay';
import SearchPanel from './components/SearchPanel';
import MealDescription from './components/MealDescription.js';
// import Home from './pages/Home';
// import MealDescriptionPage from './pages/MealDescriptionPage';
// import RecipeDetails from './components/RecipeDetails';
import './App.css' 


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meal/:id" component={MealDescriptionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

