import { useEffect, useState } from 'react'


const Orders = (  ) => {


  const [listOrder, setListOrders] = useState([])

  useEffect(() => {

    const getOrders = async () => {
      let result = await fetch(`https://datashopping-app-default-rtdb.firebaseio.com/orders/.json`)

      result = await result.json()

      console.log("productsList", Object.entries(result))
      let productsList1 = Object.entries(result)

      console.log("productsList1", productsList1 )

      let productsList2 = productsList1.map( ( prod ) => {
        
         
        console.log("prod", prod[1])

        return  prod[1]
      })

      console.log("productsList2", productsList2.lengths )

      let productsResult = []
      
      for( let i=0; i<productsList2.length; i++){

        console.log("productsList2", productsList2[i].length)

        productsList2[i].forEach( ( prod, index ) => {
        
          productsResult.push( {...prod, "orderId": i+1 })
          console.log("prod zz", index, prod )
  
          
        })
        

      }

      

      console.log( "result 2", productsResult )


      setListOrders( productsResult )
    }
    getOrders()
  }, [])
 
  return (
    
    <>

      
      <div className="row">
        <div className='col-12 col-md-12'>

          <div className='row row-cols-1 row-cols-md-6 g-4  m-3'>

            <table class="table table-bordered table-striped ">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"></th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>

            { listOrder.map( (producto, index)=> {

              const {
                Name,
                Marca,
                Description,
                Category,
                Image,
                Price,
                id, 
                orderId
              } = producto

              return (
                
                <tr>
                    <th scope="row">{ orderId }</th>
                    
                    <td > <img src={Image} height='45' width='45' className='card-img-top' alt='...' /></td>
                    <td >{Name}</td>
                    <td>{Price}</td>
                </tr>
                
        /*         <div className='card'>

                  <img src={Image} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title'>{Name}</h5>
                    <p className='card-text'>{Price}</p>
                  </div>

                </div> */

              )
            })}

                </tbody>
            </table>

          </div>
        </div>

      </div>

    </>
  )
}

export default Orders