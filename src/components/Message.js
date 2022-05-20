import React from "react"

//style
import "../styles/components/massage.scss"

export default function Message() {
  return (
    <section className="container">
      <div className="row resp-img-col">
        <div className="image__massage__left col50"></div>
        <div className="col50 row justify-content--center align-items--center">
          <div className="col ">
            <h3 className="text-center padding-bottom">Lorem Ipsum</h3>
            <ul className="text-center text-massage">
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li>
                <a className="btn-message" href="#">
                  Acquista
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row-reverse resp-img-col">
        <div className="image__massage__right col50"></div>
        <div className="col50 row justify-content--center align-items--center">
          <div className="col ">
            <h3 className="text-center padding-bottom">Lorem Ipsum</h3>
            <ul className="text-center ">
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li className="padding-bottom">
                <p>Lorem ipsum</p>
              </li>
              <li>
                <a className="btn-message" href="#">
                  Acquista
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
