import React from "react"

//gatsby plugin
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
//style
import "../styles/components/hero.scss"

export default function Hero() {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "heroImgResize.jpg" }) {
          childImageSharp {
            gatsbyImageData(webpOptions: { quality: 100 })
          }
        }
      }
    `
  )
  const heroImage = getImage(placeholderImage)
  return (
    <section>
      <BgImage
        image={heroImage}
        className="heroBackgroundImage container row justify-content--center"
      >
        <div className="container-hero text-center">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>

          <div className="row justify-content--sb container-hero-btn resp-col">
            <a className="btn btn-text">Lorem</a>
            <a className="btn btn-text">Lorem</a>
            <a className="btn btn-text">Lorem</a>
          </div>
        </div>
      </BgImage>
    </section>
  )
}
