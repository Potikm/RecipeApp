import React from 'react'

const Card = ({recipe}) => {
  return (
    <div>
       <h3 className='titlePopular'>{recipe.title}</h3>
       <img className='imgPopular' src={recipe.image} alt="" />
      
    </div>
  )
}

export default Card