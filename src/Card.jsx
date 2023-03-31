import React from 'react'
import recipeimg from './assets/recipeimg.jpeg'

const Card = ({title, image}) => {
  return (
    
        <div className='card'>
            <img src={image ? image : recipeimg} alt="" />
            <h5>{title}</h5>
            <button>Like</button>
        </div>
    
  )
}

export default Card