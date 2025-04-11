import "./Main.css"
import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe"
import IngredentList from "../IngredientList/IngredientList"
import { getRecipeFromChefClaude } from "../../ai"


export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)
  const [recipe, setRecipe] = useState("")


  const recipeSection = useRef(null)
  console.log(recipeSection)

  function getIngrediant(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  useEffect(() => {
    if(recipeSection.current) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
    console.log("Running effect")
  },[recipe])


  async function getRecipe() {
    const recipeData = await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeData)
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
            <IngredentList getRecipeFunction={getRecipe} ingredients={ingredients} ref={recipeSection} />
          </section>
        ) : null}
        {recipeShown ?
          <ClaudeRecipe recipe={recipe} /> :
          null}
      </main>
    </>
  )
}

