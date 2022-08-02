import React, {useState, useEffect} from "react";

const SearchComponent = () =>{

    const[products, setProducts]=useState([])
    const [search, setSearch]=useState("")


    const productsData = async()=>{
        const response = await fetch('https://datashopping-app-default-rtdb.firebaseio.com/.json')
        const data = await response.json
        console.log(data)
        setProducts(data)
    }
    productsData()

}

useEffect(()=>{
    productsData()
},[])

return(
    <div>
        <imput value={search} type="text" placeholder='Search'/>
    </div>
)




export default SearchComponent