import React from 'react'
import { useEffect, useState } from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";
import {Link} from 'react-router-dom'


function Veggie() {
  const [veggie, setVeggie] = useState([]);



    useEffect(() => {
      getVeggie();
    }, [])

    
    

    const getVeggie = async () => {
      const check = localStorage.getItem('veggie');

      if (check){
        setVeggie(JSON.parse(check))
      }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=ec52bd27e3044373a824fa3dd3c4c90c&number=10&tags=vegetarian`)
        const data = await api.json();

        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes)
        console.log(veggie)
      }
    }



  return (
    <div>
      <h3 className='header'>Vegetarian Picks</h3>
       <Splide options={{perPage: 4, arrows: false, pagination: false, drag: 'free'}}>  
      {veggie.map((recipe, index) => {
        return(
          <SplideSlide >

            <Link to={'/recipe/'+recipe.id}>
            <Card key={recipe.id} recipe={recipe} />
            </Link>

            
          </SplideSlide>
       
        )
      })}
       </Splide>
    </div>
  )
}

export default Veggie