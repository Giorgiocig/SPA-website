import React from "react"

export default function MessageText({ text }) {
  return (
    <h2 className="text-center" style={{ padding: "2rem 0" }}>
      {text}
    </h2>
  )
}
