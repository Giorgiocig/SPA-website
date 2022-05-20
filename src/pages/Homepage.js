import React from "react"
import Contacts from "../components/Contacts"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Images from "../components/Images"
import ListIcons from "../components/ListIcons"
import Message from "../components/Message"
import MessageText from "../components/MessageText"
import Footer from "../components/Footer"

export default function Homepage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <ListIcons />
      <Images />
      <MessageText text={"I nostri massaggi più apprezzati"} />
      <Message />
      <MessageText text={"dove siamo e come conttatarci"} />
      <Contacts />
      <Footer />
    </div>
  )
}
