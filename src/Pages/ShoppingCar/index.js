import{Table} from 'reactstrap'
 
const ShoppingCar = (props) =>{
    const { product, addProductHandler, removeProductHandler } = props
  const {  Image, Name, Description, Category, Price} = product
    return(
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
    <tr>
      <th scope="row">
        <img src={Image} alt="" />
      </th>
      <td>
        {product}
      </td>
      <td>
        {price}
      </td>
      <td>
        #
      </td>
      <td>
        $$$
      </td>
    </tr>
  </tbody>
</Table>
    )
}

export default ShoppingCar