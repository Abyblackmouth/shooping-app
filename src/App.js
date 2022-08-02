<<<<<<< HEAD
=======
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { Link, Routes, Route } from 'react-router-dom'
import FormData from './Pages/Form'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'


function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    console.log(route)
  }

  return (
    <div className='App'>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/FormData' className='nav-link'>
                Formulario
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/ProductsData' className='nav-link'>
                Productos  {/* // editado por abraham */}
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/Cart' className='nav-link'>
                Carrito
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          
          <div className='col-12'>
            <Routes>
              <Route path='/' element={<h1>bienvenido a nuestra app</h1>} />
              <Route path='/FormData' element={<FormData/>} />
              <Route path='/ProductsData' element={<Products  />} />
              <Route
                path='/product-detail/:id'
                element={<ProductDetail />}
              /> 
              <Route path='/Cart/:id/:cant' element={<Cart  />} />
              
            </Routes>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
>>>>>>> 0779e0576e97970e76ac6efdef9ea84273e2605f
