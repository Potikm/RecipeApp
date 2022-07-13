import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CCard from './CCard';
import { Link } from 'react-router-dom';

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  var params = useParams();
  

  
 
  const getCuisine = async (name) => {
    const check = localStorage.getItem(params.type);
 
  
    if (check){
      setCuisine(JSON.parse(check))
    }else{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ec52bd27e3044373a824fa3dd3c4c90c&cuisine=${name}`);
      const recipes = await data.json();

      localStorage.setItem(params.type, JSON.stringify(recipes.results));
      setCuisine(recipes.results)

      
    }
   

  }

 
  
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type])

  return (
    <>
      <h3 className='header'>{params.type} Cuisine</h3>
    <div className='Grid'>
   
      {cuisine.map((cui) => {
        return(
          <div className="cuisineItem">
            <Link to={'/recipe/'+ cui.id}>
              <CCard key={cui.id} cuisine={cui}/>
            </Link>
           
          </div>
         
        )
        
      })}
    </div>
    </>
  
  )
}

export default Cuisine