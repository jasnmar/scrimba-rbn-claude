import "./IngredientList.css"


export default function IngredentList(props) {
  const ingredientElements = props.ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientElements}
      </ul>
    </section>
  )
}