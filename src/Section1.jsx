import React from 'react'
import recipeimage from './assets/recipeimage.png'

const Section1 = () => {
  return (
    
    <div className='sec1'>
        <div className='text'>
            <h1>Let's Start Cooking With Popular Recipes</h1>
            <p>Want to learn cooking but don't know how to start? <br />Don't worry, we have got you covered!</p>
            <button>EXPLORE RECIPES</button>
        </div>
        <div>
            <img src={recipeimage} alt="" />
        </div>
    </div>
  )
}

export default Section1