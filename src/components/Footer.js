import React from "react"
//component
import ListIconsFooter from "./ListIconsFooter"
//style
import "../styles/components/footer.scss"
//fontAwesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer className="container row justify-content--sb padding-footer">
      <div>
        <h3>seguici sui social</h3>
        <ListIconsFooter />
      </div>

      <div className="col align-items--center">
        <h3>Contacts</h3>
        <ul>
          <li className="col align-items--center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="color-accent footer-icon"
            />
            <p>email: email@gma.com</p>
          </li>
          <li className="col align-items--center">
            <FontAwesomeIcon
              icon={faPhone}
              className="color-accent footer-icon"
            />
            <p>tel: 0454646</p>
          </li>
        </ul>
      </div>
    </footer>
  )
}
