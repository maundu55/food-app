import React from 'react'
import Navbar from './Components/NavBar/NavBar'
import {Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />

        
        </Routes>
    </div>
  )
}

export default App