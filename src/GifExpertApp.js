import React, { useState } from 'react'

const GifExpertApp = () => {

    //const categories=['one punch','samurai x', 'drogon boll'];
    const [categories, setCategories] = useState(['one punch','samurai x', 'drogon boll'])

    const handleAdd= ()=>(
      
      console.log("funciona")
      /*setCategories(
        [...categories,
            
        ]
      )*/
    )

    return (
        <>
          
          <h2>GifExpertApp</h2>
          <hr />

          <button
          onSubmit={handleAdd}
          >Agregar</button>

          <ol>
            {
            categories.map(categorie=>{ return <li key={categorie}>{categorie}</li> })
            
            }
          </ol>  
        </>
    )
}

export default GifExpertApp
