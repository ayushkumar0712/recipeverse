import Meal from "./Components/Meal";
import React from "react";
import './Components/style.css';
import { Routes,Route } from "react-router-dom";
import RecipeInfo from "./Components/RecipeInfo";
import ScrollButton from "./Components/ScrollButton";
function App() {
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Meal/>}/>
    <Route path="/:MealId" element ={<RecipeInfo/>}/>
    </Routes>
    <ScrollButton/>
    </>
   
  );
}

export default App;
