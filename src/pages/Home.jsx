import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

import React from 'react'

function Home() {
  return (
    <div className="home">
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home