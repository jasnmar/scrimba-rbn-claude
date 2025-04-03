import "./ClaudeRecipe.css"
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
  return (
    <section className="clauderecipe--suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}
