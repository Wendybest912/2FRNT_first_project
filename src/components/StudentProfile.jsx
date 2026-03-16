import React from 'react'

export default function StudentProfile(props) {
  return (
    <div>
      <h1>Bienvenue, {props.firstName} {props.lastName}</h1>
      <p>Age : {props.age}</p>
      <p>Titre : {props.title}</p>
      <p>Lieu : {props.location}</p>
      <p>Bio : {props.bio}</p>
    </div>
  )
}

