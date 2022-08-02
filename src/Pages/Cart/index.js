import {React,useState,useEffect} from 'react'
import{Table} from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Cart = () => {
  const useParams = useParams()
 const {id,cant} = useParams
 const [selectedProduct, setSelectedProduct] = useState({})

 useEffect(() => {

  const getProductById = async () => {
    let result = await fetch(`https://datashopping-app-default-rtdb.firebaseio.com/${id}.json`)


    result = await result.json()

    console.log( "result", result )
    setSelectedProduct(result)
  }
  getProductById()
}, [])

  return (
    <>
        <div className='col-12 col-md-6'>
            <h1>Carrtito</h1>
            <div row row-cols-1 row-cols-md-2 g-4 >
        <Table dark>
  <thead>
    <tr>
    <th>
        Imagen
      </th>
      <th>
        Producto
      </th>
      <th>
        Precio
      </th>
      <th>
        Cantidad
      </th>
      <th>
        Total
      </th>
    </tr>
  </thead>
  <tbody>
    
    {<tr>
      <th scope="row">
        <img src='imagen' alt="" />
      </th>
      <td>
       {selectedProduct.name}
      </td>
      <td>
       {selectedProduct.price}
      </td>
      <td>
        {selectedProduct.cant}
      </td>
      <td>
        $$$
      </td>
    </tr>}
  </tbody>
</Table>
      </div>
        </div>
    </>
  )
}

export default Cart