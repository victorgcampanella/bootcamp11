import React, {useState} from 'react'

import './App.css'

import Header from './components/Header'
import backgroundImage from './assets/background.jpg'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end Web'])

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`)
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Projects"/>

      <img src={backgroundImage} width={300}/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App