import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input);
  }



  return (
    <form className='form' onSubmit={submitHandler}>
        <FaSearch className='searchImg'></FaSearch>
        <input type="text" className='input' onChange={(e) => setInput(e.target.value)} />
      
    </form>
  )
}

export default Search