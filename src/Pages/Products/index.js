import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

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

        AllProducts()



    }, [])
    console.log(products)

    return (
        <>

            <div className='col-12 col-md-12'>
                <div className='row row cols-1 row-cols-md-2 g-4'>
                    {products.map(producto => {
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
                             <Link to={`/Product-Detail/${id}`}> 
             
                                    <img src={Image} className='card-img-top' alt='...' />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{Image}</h5>
                                        <p className='card-text'>{Name}</p>
                                        <p className='card-text'>{Marca}</p>
                                        <p className='card-text'>${Price}</p>
                                    </div>
                    
                            </Link >

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}


export default Products

