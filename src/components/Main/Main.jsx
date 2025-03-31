import "./Main.css"
import { useState } from "react"



export default function Main() {
  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

  const ingredientElements = ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })
  
  function submitHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    console.log(ingredients)
  }


  return (
    <>
    <main>
      <form className="main--add-ingredient" onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="e.g. Onion, Oregeno"
          aria-label="Add ingredint"
          name="ingredient" />
        <button>Add Ingredient</button>
      </form>
      <ul>
        {ingredientElements}
      </ul>
    </main>
    </>
  )
}

