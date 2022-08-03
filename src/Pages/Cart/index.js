import { useEffect, useState } from 'react'


const Cart = ( props ) => {

  const { listOrder } = props
  
  console.log( listOrder )

  const [selectedProduct, setSelectedProduct] = useState({})



  const addOrderDB = async ( ) =>{

    let result = await fetch( 'https://datashopping-app-default-rtdb.firebaseio.com/orders/.json',    
      {
        method: 'POST',
        body: JSON.stringify( listOrder )
      }
    )
    result = await result.json()
    
    console.log( result  )
    
  }

/*   

  useEffect(() => {

    const getProductById = async () => {
      let result = await fetch(`https://datashopping-app-default-rtdb.firebaseio.com/${id}.json`)


      result = await result.json()

      console.log( "result", result )
      setSelectedProduct(result)
    }
    getProductById()
  }, [])
 */
  return (
    
    <>


      <div className="row">
        <div className='col-12 col-md-6'>
        </div>
        <div className='col-12 col-md-6'>
          <button className="btn btn-warning m-3" onClick={ addOrderDB }>Realizar Compra</button>
        </div>
      </div>
      
      <div className="row">
        <div className='col-12 col-md-12'>

          <div className='row row cols-1 row-cols-md-6 g-4'>
            {listOrder.map(producto => {
              const {
                Name,
                Marca,
                Description,
                Category,
                Image,
                Price,
                id
              } = producto


              return (

                <div className='card'>

                  <img src={Image} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title'>{Name}</h5>
                    <p className='card-text'>{Price}</p>
                  </div>


                </div>
              )
            })}
          </div>
        </div>

      </div>

    </>
  )
}

export default Cart