import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch','samurai x', 'drogon boll'])
    
   

    return (
        <>
          
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories} />
          <hr />
          
          <ol>
            {
            categories.map(categorie=>{ return <li key={categorie}>{categorie}</li> })
            
            }
          </ol>  
        </>
    )
}

export default GifExpertApp
