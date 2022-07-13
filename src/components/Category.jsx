import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';



import React from 'react'

const Category = () => {
  return (
    <div className='Categories'>
        <NavLink to={"/cuisine/Italian"} className="Category">
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/American"} className="Category">
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"} className="Category">
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/European"} className="Category">
            <GiChopsticks />
            <h4>European</h4>
        </NavLink>
    </div>
  )
}

export default Category