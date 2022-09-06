import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/RecipeApp"}>
     <GiKnifeFork  className="Logo"/>
    </Link>
   
  )
}

export default Logo