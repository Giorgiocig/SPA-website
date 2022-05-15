import React from "react"
import "../styles/components/navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar row justify-content--center">
      <ul className="row justify-content--sb unordered__list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Servizi</a>
        </li>
        <li>
          <a>Prestazioni</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </nav>
  )
}
