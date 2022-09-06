import { useEffect, useState } from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";
import { Link } from 'react-router-dom';

function Popular() {
   
   const [popular, setPopular] = useState([]);



    useEffect(() => {
      getPopular();
    }, [])

    
    

    const getPopular = async () => {
      const check = localStorage.getItem('popular');

      if (check){
        setPopular(JSON.parse(check))
      }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=ec52bd27e3044373a824fa3dd3c4c90c&number=10`)
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(popular)
      }
    }



  return (
    <div>
      <h3 className='header'>Popular Picks</h3>
      
       <Splide options={{perPage: 4, arrows: false, pagination: false, drag: 'free'}}>  
      {popular.map((recipe, index) => {
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


export default Popular