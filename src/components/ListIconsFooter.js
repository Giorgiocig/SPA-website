import React from "react"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import FooterIcon from "./FooterIcon"

export default function ListIconsFooter() {
  const arrayIcons = [faFacebook, faTwitter, faInstagram]
  return (
    <div className="text-center">
      {arrayIcons.map(icon => {
        return <FooterIcon icon={icon} />
      })}
    </div>
  )
}
