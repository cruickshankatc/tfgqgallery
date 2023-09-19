import React from "react"

export default function CharacterIcons(props) {
  return (
      <div>
        <img src={`/images/${props.image}`}/>
        <span>{props.name}</span>
      </div>
  )
}