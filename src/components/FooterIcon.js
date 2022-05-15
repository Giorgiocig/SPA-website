import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/components/footer.scss"

export default function FooterIcon({ icon }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className="color-accent footer-icon" />
    </div>
  )
}
