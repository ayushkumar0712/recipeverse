import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import Navbar from "./Navbar";
const Meal=()=>{

    const [url,setUrl]= useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem] = useState();
    const [show,setShow]= useState(false);
    const [search,setSearch]=useState("");
    useEffect(()=>{
     fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        setItem(data.meals);
        setShow(true);
     })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    return (
        <>
       <div className="heading">
        <Navbar/>
       <h1>Search your food recipe</h1>
       </div>

        <div className="main">
            
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Search Here...." 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
            </div>
            <div className="container">
                {
                    show ? <MealItem data={item}/> :"Not Found"
                }
            </div>
            <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>

        </>
    )
}
export default Meal;