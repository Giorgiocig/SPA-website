import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import logo from "../images/logo.jpg"

import "../styles/components/header.scss"
import Navbar from "./Navbar"

export default function Header() {
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
      <Navbar />
      <div class="nav-toggle">
        <div class="hamburger"></div>
      </div>
    </header>
  )
}
