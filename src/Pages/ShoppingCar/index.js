import{Table} from 'reactstrap'
 
const ShoppingCar = () =>{
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
        <img src='image' alt="" />
      </th>
      <td>
        'Producto'
      </td>
      <td>
        $$
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