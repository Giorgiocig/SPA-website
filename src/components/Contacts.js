import React from "react"
import "../styles/components/contacts.scss"

export default function Contacts() {
  return (
    <div className="row container resp-contactContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.668009136045!2d-1.3422547527414181!3d60.59093026388575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x489f1d145fc6ee8d%3A0x2d65ee4b88c79cfa!2sNorth%20Roe%2C%20Shetland%20ZE2%209RY%2C%20UK!5e0!3m2!1sen!2sfr!4v1652261785603!5m2!1sen!2sfr"
        className="col50 frame"
      ></iframe>
      <div className="col50 row align-items--center justify-content--center">
        <form className="grid">
          <div className="grid-a col align-items--center">
            <label>nome</label>
            <input type="text" />
          </div>
          <div className="grid-b col align-items--center">
            <label>cognome</label>
            <input type="text" />
          </div>
          <div className="grid-c col align-items--center">
            <label>email</label>
            <input type="text" />
          </div>
          <button className="btn-contacts grid-d margin">invia</button>
        </form>
      </div>
    </div>
  )
}
