import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projetos</li>
        </ul>
      </Header>
      <Header title="Projets">
        <ul>
          <li>Homepage</li>
          <li>Projetos</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  )
}

export default App