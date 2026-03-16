import React from 'react'
import SkillItem from './SkillItem'


export default function SkillList({skills}) {
  return (
    <div>
        <ul>
            {skills.map((skill) => (
                <SkillItem
                    id = {skill.id}
                    name = {skill.name}
                    skill = {skill.level}
                />
            ))}
        </ul>
    </div>
  )
}
