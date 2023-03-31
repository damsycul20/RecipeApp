import {useEffect, useState} from 'react'
import React from 'react'
import Header from '../Header'
import Section1 from '../Section1'
import Section2 from '../Section2'
import Card from '../Card'
import Footer from '../Footer'

const Homepage = () => {
    


  const [data, setData] = useState([])

  useEffect(() => {
    const check = localStorage.getItem('recipe')
    
if (check) {
    setData(JSON.parse(check))

} else { 
  fetch(url).then(res => res.json()).then(data => {
    localStorage.setItem('recipe', JSON.stringify(data.recipes))
      setData(data.recipes)
    })
}
  },[])

  const url = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_KEY }&number=20`
  return (
    <div>
        <Header/>
      <Section1/>
      <Section2/>
      <div className='card-con'>
        {data?.map(recipe => {
          return <Card title={recipe.title} image={recipe.image} key ={recipe.id}/>
        })}
      <Card/>
      </div>
     
      <Footer/>
    </div>
  )
}

export default Homepage