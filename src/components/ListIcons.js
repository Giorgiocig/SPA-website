import React from "react"
import { faSpa } from "@fortawesome/free-solid-svg-icons"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { faHotTubPerson } from "@fortawesome/free-solid-svg-icons"
import "../styles/components/listIcons.scss"
import Icon from "./Icon"

export default function ListIcons() {
  return (
    <section className="row container justify-content--sb text-center listIcons">
      <Icon icon={faSpa} text={"lorem Ipsum"} />
      <Icon icon={faHotel} text={"lorem Ipsum"} />
      <Icon icon={faHotTubPerson} text={"lorem Ipsum"} />
    </section>
  )
}
