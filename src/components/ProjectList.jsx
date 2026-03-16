import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectList({projects}) {
  return (
    <div>
      <ul>
        {projects.map((project) => (
            <ProjectCard
                id = {project.id}
                name = {project.name}
                tech = {project.tech}
                description = {project.description}
            />
        ))}
      </ul>
    </div>
  )
}
