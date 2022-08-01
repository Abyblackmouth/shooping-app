import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Products from '../Products'

const ProductDetail = () => {
  const [ cantProd, setCantProd ] =  useState( 0 )
  const [selectedProduct, setSelectedProduct] = useState({})
  const params = useParams()
  console.log(params)
  const { id } = useParams()

  const navigate = useNavigate()

  const clickAddCant = () =>{ setCantProd ( cantProd + 1 )  }
  const clickMinCant = () =>{ setCantProd ( cantProd == 0? 0: cantProd - 1 )  }

  const clickAddCart = id =>{      
      const selectedProducts = selectedProduct.find(product => product.id === id)
      console.log(selectedProducts)
      setSelectedProduct([...selectedProducts,{ ...selectedProduct, purchased: true }
      ])
    
  }
  console.log('valor de set selectedProduct',setSelectedProduct)
  useEffect(() => {

    const getProductById = async () => {
      let result = await fetch(`https://datashopping-app-default-rtdb.firebaseio.com/${id}.json`)


      result = await result.json()

      console.log( "result", result )
      setSelectedProduct(result)
    }
    getProductById()
  }, [])

  const { Image, Name, Description, Category, Price, } = selectedProduct
  const goBackHandler = () => {
    navigate('/products')
  }
  return (
    <>

        <div className='col-12 justify-content-center'> 

          <div className="row">
            <div className='col-4'> 
              
            </div>
            <div className='col-4'> 
              <h1>Detalle de Produto</h1>
              <div className='btn btn-primary mt-3' onClick={goBackHandler}>
                Volver al catalogo
              </div>
            </div>
            <div className='col-4'> 
             
            </div>
          </div>

          <div className="row">
            <div className='col-12'> 

              <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h5 class="display-5 fw-normal">{Category}</h5>
            
              </div>
              

            </div>
          </div>

          <div className="row">

            <div className='col-12 col-md-6'> 
              <img src={Image} className='card-img-top' alt='...' />
            </div>

            <div className='col-12 col-md-6'>
              <div className='card  mt-3'>
                
                <div className='card-body'>
                        
                  <h5 class="card-title">{Name}</h5>

                  <p className='card-text'>$ {Price}</p>

                  
                  <div className="input-group mb-3 col-3">
                    <button type="button" className="btn btn-primary" onClick={clickMinCant} > - </button>
                    <input type="text" name="cantProdInput" value={cantProd} className="form-control form-control-sm" placeholder="0" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    <button type="button" className="btn btn-primary" onClick={clickAddCant} > + </button>
                    
                  </div>
                  

                  <button type="button" className="btn btn-primary" onClick={()=>{clickAddCart(id)}} > Agregar al Carrito </button>
                </div>

                <div className='col-12 border border-1'> 
                  <p className='card-text m-3' style={{textAlign:'justify'}}>{Description}</p>

                </div>
              </div>
            </div>

          </div>

          

        </div>
    </>
  )
}

export default ProductDetail
