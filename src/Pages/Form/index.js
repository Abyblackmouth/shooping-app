import React from "react";
import { useForm } from "react-hook-form";

const FormData = () =>{
  const { register, handleSubmit } = useForm();


  const onSubmit = async data => {
    let result = await fetch('https://datashopping-app-default-rtdb.firebaseio.com/.json', {
      method: 'POST',
      body: JSON.stringify(data)

    }

    )
    console.log(await result.json())
  }

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("Name")} placeholder='Nombre' required />
    //   <input {...register("Image")} placeholder='Imagen' required/>
    //   <input {...register("Description")} placeholder='Descripción' required/>
    //   <input {...register("Price")} placeholder='Precio' required />
    //   <input {...register("Category")} placeholder='Categoria' required />
    //   <input type="submit" />
    // </form>


    <div className='row'>
      <div className='col-12 col-md-6'>
        
        <form  className='bg-dark text-white p-3 border rounded' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label htmlFor=''>Nombre:</label>
            <input {...register("Name")} placeholder='Nombre' required  className='form-control'  />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Correo</label>
            <input {...register("Description")} placeholder='Descripción' required  className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Generación</label>
            <input {...register("Price")} placeholder='Precio' required  className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Generación</label>
            <input {...register("Category")} placeholder='Categoria' required  className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Imagen</label>
            <input {...register("Image")} placeholder='Imagen' required  className='form-control'/>
          </div>
          <button
            className='btn btn-success mt-3 ms-auto'
            
            type='submit'
          >
            Guardar Producto
          </button>
        </form>
      </div>
    </div>




  );
}

export default FormData;