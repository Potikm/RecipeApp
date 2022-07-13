import React from 'react'

const CCard = ({cuisine}) => {
  
  return (
    <div className='cuisineCard'>
        <img className='cuisineImg' src={cuisine.image} alt="" />
        <h3 className='cuisineTitle'>{cuisine.title}</h3>
    </div>
  )
}

export default CCard