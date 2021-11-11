import React from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
      
        fetch('http://localhost:5000/addUser',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            // alert('successfully inserted data')
            console.log(result)
        })
        

    };
  
    console.log(watch("example"));
    return (
        <div>
            <h2>Add the new user</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          
            <input placeholder="Enter Name"   {...register("name")}  /><br/>
            <input  {...register("email")} placeholder="Email" /><br/>
            <input type="password" {...register("password")} placeholder="password" /><br/>
            
            <input type="submit" />
         </form>
        </div>
    );
};

export default AddUser;