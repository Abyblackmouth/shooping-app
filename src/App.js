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
import ShoppingCar from './Pages/ShoppingCar'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Orders from './Pages/Orders'


function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)

  const [ listOrder, setListOrder ] = useState([])

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    console.log(route)
  }

  const btnAddCart = ( producto ) => {

    console.log( "hizo click", producto )

    setListOrder( [ ...listOrder, producto ] )

    


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

            <NavItem>
              <Link to='/Orders' className='nav-link'>
                Lista Ordenes Compra
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
              <Route path='/ProductsData' element={<Products btnAddCart = { btnAddCart } />} />
              <Route
                path='/product-detail/:id'
                element={<ProductDetail />}
              /> 
              <Route path='/Cart' element={<Cart listOrder= {listOrder} />} />
              
              <Route path='/Orders' element={<Orders/>} />
              
            </Routes>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
