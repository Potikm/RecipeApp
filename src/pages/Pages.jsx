import React from 'react'
import Home from './Home'
import {Navigate, Route, Routes} from "react-router-dom"
import Cuisine from '../components/Cuisine'
import Searched from '../components/Searched'
import Recipe from '../components/Recipe'

function Pages() {
  return (
    
    <Routes >
     <Route path='/RecipeApp' element={<Home />}/>
     <Route path='/cuisine/:type' element={<Cuisine />}/>
     <Route path='/searched/:search' element={<Searched />}/>
     <Route path='/recipe/:name' element={<Recipe />}/>
     
    </Routes>
    
       
    
 
  
  )
}

export default Pages