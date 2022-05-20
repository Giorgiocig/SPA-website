import React from "react"

import "../styles/components/images.scss"

export default function Images() {
  return (
    <section className="row container resp-img-col">
      <div className="image1 position-rel margin-right">
        <p className="position-abs images-text">Massaggi</p>
      </div>
      <div className="image2 position-rel margin-left resp-img-col">
        <p className="position-abs images-text ">Prodotti</p>
      </div>
    </section>
  )
}
