import "./Header.css"
import claudeIcon from "../../assets/chef-claude-icon.png"

export default function Header() {
  return (
    <>
    <header>
      <img className="header--icon" src={claudeIcon} alt="claude icon" />
      <p className="header--title">Chef Claude</p>
    </header>
    </>
  )
}

