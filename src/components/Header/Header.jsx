import { Link } from "react-router-dom"
import "./Header.scss"

function Header() {
  return (
    <nav>
      <div className="container">
        <ul className="nav-wrapper">
          <li>
            <Link to="/">Movie Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
