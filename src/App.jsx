import { useState } from 'react'
import './App.css'
import StudentProfile from './components/StudentProfile'
import SkillList from './components/SkillList'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  const students = {
  firstName: "Mathias",
  lastName: "Lin",
  age: "20",
  title: "Someone ",
  location: "Qingtian",
  bio: "a random guy"
} 

  const skills = [
    {id: 1, name: "React", level: "advanced"},
    {id: 2, name: "JavaScript", level: "advanced"},
    {id: 3, name: "CSS", level: "intermediate"}
  ]

  const projects= [
    {id: 1, name: "Portfolio", tech: "React", description: "Portfolio wab réalisé en cours."},
    {id: 2, name: "API rest", tech: "Node.js", description: "Développement backend sécurisé."}
  ]

  return (
    <>
      <Header/>
      <StudentProfile {...students}/>
      <SkillList skills = {skills}/>
      <ProjectList  projects = {projects}/>
      <Footer/>

    </>
  )
}

export default App
