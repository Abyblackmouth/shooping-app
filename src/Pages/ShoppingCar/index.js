import{Table} from 'reactstrap'
import ProductDetail from '../ProductDetail'
 
const ShoppingCar = (props) =>{
 const params = useParams()
 console.log('params',params)
  // const {  Image, Name, Description, Category, Price} = product
    return(  
      <>
      <h1>Productos seleccionados</h1>
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
  
    {/* <tr>
      <th scope="row">
        <img src='imagen' alt="" />
      </th>
      <td>
       producto
      </td>
      <td>
        precio
      </td>
      <td>
        #
      </td>
      <td>
        $$$
      </td>
    </tr> */}


  </tbody>
</Table>
      </div>
      </>
    )
}

export default ShoppingCar