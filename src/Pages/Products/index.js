import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Products = ( props ) => {
    const [products, setProducts] = useState([])
    const { btnAddCart } = props
    const [textFilter, settextFilter] = useState("")

    useEffect(() => {

        

        AllProducts()



    }, [])
    console.log(products)

    const AllProducts = async () => {
        let productsList = await fetch('https://datashopping-app-default-rtdb.firebaseio.com/.json')
        productsList = await productsList.json()
        console.log("productsList", Object.entries(productsList))
        let productsList1 = Object.entries(productsList)
        let productsList2 = productsList1.map(prod => {
            console.log("prod", prod[1])
            return { ...prod[1], id: prod[0] }
        })

        console.log("productsList 3", productsList2)

        setProducts(productsList2)
    }


    const btnHandler = ( producto ) =>{

        console.log("Click", producto )
        btnAddCart( producto )
    }

  /*   const searchEvent = ( event ) =>{


        console.log("Click", event.target.value)
        console.log(products)
        let filterProduct = products.map(product =>{
           return product.Name.includes(event.target.value) 
        })
        console.log(filterProduct)
        setProducts(filterProduct)
    }
 */

    const searchEvent = (event) =>{
      
        settextFilter(event.target.value)

        console.log( event.target.value.length )
        if ( event.target.value.length == 0  ) {

            AllProducts()
        }
        
    }


    const search = () =>{
      
        const value = textFilter
        console.log(products)

        const result = products.filter((cv,index)=>{
            console.log(cv.Category)
            console.log(value)
            
            let txtName = cv.Name ? cv.Name.toLowerCase() : ""
            let txtCategoria = cv.Category ? cv.Category.toLowerCase() : ""
            let txtMarca = cv.Marca ? cv.Marca.toLowerCase() : ""

            return txtName.includes( value.toLowerCase() ) || txtCategoria.includes( value.toLowerCase() ) 
                || txtMarca.includes( value.toLowerCase() )
        })
        
        setProducts(result)    
    }

    return (
        <>

            <div className="row">
                <div className='col-12 col-md-3'>
                </div>
                <div className='col-12 col-md-3'>
                    <input type="text" placeholder='Search' className="form-control m-3" onChange={searchEvent}/>                    
                </div>
                <div className='col-12 col-md-3'>                    
                    <button className="btn btn-primary m-3" onClick={search}>Buscar</button>
                </div>
            </div>
            
            <div className='col-12 col-md-12'>
                <div className='row row cols-1 row-cols-md-6 g-4'>
                    {products.map( producto => {
                        const {
                            Name,
                            Marca,
                            Description,
                            Category,
                            Image,
                            Price,
                            id
                        } = producto

                        console.log(products)
                        return (

                            <div className='card'>
             
                                    <img src={Image} className='card-img-top' alt='...' />
                                    <div className='card-body'>
                                     
                                        <p className='card-text'>{Name}</p>
                                        <p className='card-text'>{Marca}</p>
                                        <p className='card-text'>${Price}</p>
                                    </div>
                    
                                <Link to={`/Product-Detail/${id}`}> 
                                    <button className="btn btn-primary mb-3">Ver detalle</button>
                                </Link >

                                <button type="button" className="btn btn-success mb-3" onClick={ () => { btnHandler(producto) }}>Agregar al carrito</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}


export default Products

