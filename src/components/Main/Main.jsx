import "./Main.css"

export default function Main() {
  return (
    <>
    <main>
      <form className="main--add-ingredient">
        <input 
          type="text" 
          placeholder="e.g. Onion, Oregeno"
          aria-label="Add ingredint" />
        <button>Add Ingredient</button>
      </form>
    </main>
    </>
  )
}

