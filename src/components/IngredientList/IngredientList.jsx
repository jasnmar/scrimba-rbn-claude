import "./IngredientList.css"


export default function IngredentList(props) {
  
  const ingredientElements = props.ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })

  return (
    <>
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientElements}
      </ul>
    </section>
    {props.ingredients.length > 3 ? (
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.getRecipeFunction}>Get a recipe</button>
      </div>
    ) : null}
    </>
  )
}