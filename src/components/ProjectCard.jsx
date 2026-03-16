import React from 'react'

export default function ProjectCard({id, name , tech, description}) {
  return (
    <div>
      <p>name : {name} <br />
         tech: {tech} <br />
         description: {description} </p> <br />
         <hr />
    </div>
  )
}
