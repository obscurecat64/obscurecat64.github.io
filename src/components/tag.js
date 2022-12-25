import React from "react"
import { tag } from "./tag.module.css"

const getTagStyle = title => {
  switch (title) {
    case "tech":
      return {
        border: "1px solid #adc6ff",
        color: "#1d39c4",
        backgroundColor: "rgb(240, 245, 255)",
      }
    case "life":
      return {
        border: "1px solid #d3adf7",
        color: "#531dab",
        backgroundColor: "rgb(249, 240, 255)",
      }
    default:
      return {
        border: "1px solid #ffadd2",
        color: "#c41d7f",
        backgroundColor: "rgb(255, 240, 246)",
      }
  }
}

const Tag = ({ title }) => {
  return (
    <span className={tag} style={getTagStyle(title)}>
      {title}
    </span>
  )
}

export default Tag
