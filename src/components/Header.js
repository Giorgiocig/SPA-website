import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import logo from "../images/logo.jpg"
import { useToggle } from "../hooks/useToggle"

import "../styles/components/header.scss"
import Navbar from "./Navbar"

export default function Header() {
  const [toggle, setToggle] = useToggle(true)
  return (
    <header className="container">
      <ul className="row justify-content--sb align-items--center">
        <li className="row align-items--center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="color-accent headerIconRight"
          />
          <p>mail</p>
        </li>
        <li className="row justify-content--center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </li>
        <li className="row align-items--center">
          <p>tel</p>
          <FontAwesomeIcon
            icon={faPhone}
            className="color-accent headerIconLeft"
          />
        </li>
      </ul>
      <Navbar toggle={toggle} />
      <div
        className={toggle ? "nav-toggle is-open" : "nav-toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <div className={toggle ? "hamburger is-open" : "hamburger"}></div>
      </div>
    </header>
  )
}
