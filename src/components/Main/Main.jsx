import "./Main.css"
import { useState } from "react"
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe"
import IngredentList from "../IngredientList/IngredientList"


export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)

  function getIngrediant(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  function getRecipe() {
    setRecipeShown(true)
  }

  return (
    <>
      <main>
        <form className="main--add-ingredient" action={getIngrediant}>
          <input
            type="text"
            placeholder="e.g. Onion, Oregeno"
            aria-label="Add ingredint"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>
        {ingredients.length > 0 ? (
          <section>
            <IngredentList ingredients={ingredients} />
            {ingredients.length > 3 ? (
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
              </div>
            ) : null}
          </section>
        ) : null}
        {recipeShown ?
          <ClaudeRecipe /> :
          null}
      </main>
    </>
  )
}

