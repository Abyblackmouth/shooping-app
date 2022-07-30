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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder='Nombre' required />
      <input {...register("Image")} placeholder='Imagen' required/>
      <input {...register("Description")} placeholder='Descripción' required/>
      <input {...register("Price")} placeholder='Precio' required />
      <input {...register("Category")} placeholder='Categoria' required />
      <input type="submit" />
    </form>
  );
}

export default FormData;