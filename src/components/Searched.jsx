import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom';
import CCard from './CCard';
import { Link } from 'react-router-dom';

const Searched = () => {

    const [searched, setSearched] = useState([]);
    var params = useParams();


    const getSearched = async (name) => {
      
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ec52bd27e3044373a824fa3dd3c4c90c&query=${name}`)
        const data = await api.json();
        setSearched(data.results)
    }

    useEffect(() => {
     getSearched(params.search);
    },[params.search])


  return (
    <>
    
    <div className='Grid'>
 
    {searched.map((cui) => {
      return(
        
        <Link to={'/recipe/'+cui.id}>
         <CCard key={cui.id} cuisine={cui}/>
        </Link>
        
       
      )
      
    })}
  </div>
  </>
  )
}

export default Searched