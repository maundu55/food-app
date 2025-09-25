import React from 'react'
import Navbar from './Components/NavBar/NavBar'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import {Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      <Route path='/cart' element ={<Cart />} />
      <Route path ='/product/:id' element ={<ProductDetails />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App