import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import Aside1 from '../../Components/Aside1'

const Products = ({ hasAsides }) => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      let productsList = await  fetch('https://datashopping-app-default-rtdb.firebaseio.com/.json')

      productsList = await productsList.json()

      console.log( "productsList", Object.entries( productsList ) )

      let productsList1 =  Object.entries( productsList )

      let productsList2 = productsList1.map( prod =>{

            console.log ( "prod", prod[1] )

            return  { ...prod[1], id: prod[0] } 
      } )
      
      console.log( "productsList 3", productsList2  )

      setProducts(  productsList2  ) 
    }
    getProducts()
  }, [])

  return (
    <>
      {/* {hasAsides && <Aside1 />} */}
      <div className='col-12 col-md-6'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {products.map( (product, index) => {
            const {
              Name,
              Price,
              Description,
              Category,
              Image,
              id
            
            } = product
            return (
              <div className='col'>
                <Link to={`/product-detail/${id}`}>
                  <div className='card'>
                    <img src={Image} className='card-img-top' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{Name}</h5>
                      <p className='card-text'>{Description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      {/* {hasAsides && <Aside1 />} */}
    </>
  )
}

export default Products
