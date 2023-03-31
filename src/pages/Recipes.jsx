import { useEffect, useState } from 'react'
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Card from '../Card'

const Recipe = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const check = localStorage.getItem('allrecipe')
        
    if (check) {
        setData(JSON.parse(check))
    
    } else { 
      fetch(url).then(res => res.json()).then(data => {
        localStorage.setItem('allrecipe', JSON.stringify(data.recipes))
          setData(data.recipes)
        })
    }
      },[])
    
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_KEY }&number=30`
  return (
    
    <div>
        <Header/>
        <div className='card-con' style={{marginTop: '10rem'}}>
        {data?.map(recipe => {
          return <Card title={recipe.title} image={recipe.image} key ={recipe.id}/>
        })}
      <Card/>
      </div>
        <Footer/>
    </div>
  )
}

export default Recipe