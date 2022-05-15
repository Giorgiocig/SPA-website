import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/components/icon.scss"

export default function Icon({ icon, text }) {
  return (
    <section>
      <FontAwesomeIcon icon={icon} className="color-accent icon" />
      <p>{text}</p>
    </section>
  )
}
