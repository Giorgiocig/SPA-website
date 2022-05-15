import React from "react"
import "../styles/components/hero.scss"

export default function Hero() {
  return (
    <section className="heroImg container row justify-content--center">
      <div className="container-hero text-center">
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <div className="row justify-content--center heroBox">
          <div className="row justify-content--sb container-hero-btn">
            <a className="btn">Lorem</a>
            <a className="btn">Lorem</a>
            <a className="btn">Lorem</a>
          </div>
        </div>
      </div>
    </section>
  )
}
