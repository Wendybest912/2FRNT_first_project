import React from 'react'

export default function SkillItem({id, name, skill}) {
    const star = skill === "beginner" ? "⭐" : skill === "intermediate" ? "⭐⭐" :  "⭐⭐⭐"
    
  return (
    <div>
       <p>{name} {star}</p>
    </div>
  )
}
