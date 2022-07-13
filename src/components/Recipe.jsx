import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'


const Recipe = () => {
  
  const [details, setDeatils] = useState({});
  const [option, setOption] = useState(false);
  const [activeTab, setActiveTab] = useState("Instructions");



  var params = useParams();

  const getRecipe = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=ec52bd27e3044373a824fa3dd3c4c90c`);
    const details = await data.json();
    setDeatils(details);
   
  }
   

  useEffect(() => {
    getRecipe()
  },[params.name])

   
  



  return (
    <div className="recipe">
       <div>
         <h2>{details.title}</h2>
         <img src={details.image} alt="" className='cuisineImg' />
        </div>
        <div className="info">
          <div className="buttons">
          <button className={activeTab === "Instructions" ? "infoBtnActive" : "infoBtn"} type='button' onClick={(e) => {setOption(false); setActiveTab("Instructions")}}>Instructions</button>
          <button className={activeTab === "Ingredients" ? "infoBtnActive" : "infoBtn"} type='button' onClick={(e) => {setOption(true); setActiveTab("Ingredients")}}>Ingredients</button>
          </div>
          {option === true && (
            <ul>
             {details.extendedIngredients.map((ingredient) => (
              <li className='ingredient' key={ingredient.id}>{ingredient.original}</li>
             ))}
           </ul>
          )}

          {option === false && (
            <>
             <h2 className='infoText' dangerouslySetInnerHTML={{__html: details.summary}}></h2>
             <h2 className='infoText' dangerouslySetInnerHTML={{__html: details.instructions}}></h2>
            </>
            
          )}
         
         
        </div>
    </div>
   
  )
}

export default Recipe  