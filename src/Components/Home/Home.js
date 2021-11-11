import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUser]=useState([])
    const [deleteUser,setDeleteuser]=useState(false)

    //for add a new user
    useEffect(()=>{
     fetch('http://localhost:5000/allusers')
     .then(res=>res.json())
     .then(data=>setUser(data))
    },[deleteUser])

    //for delete user

    const handledelete =(id)=>{
      fetch(`http://localhost:5000/deleteuser/${id}`,{
          method:"DELETE",
          headers:{"Content-Type":"application/json"}
      })
      .then(res=>res.json())
      .then(data=>setDeleteuser(data))
    }

    return (
        <div>
            <h2>Home page is the main page</h2>

            <div className="container">
                <div className="row">
                    {
                        users.map(user=>
                            
                                <div className="col-md-4">
                                    <div className="card mb-2">
                                    <div className="card-body">
                                        <h2 className="card-title">{user.name}</h2>
                                        
                                        <p className="card-text">{user.email}</p>
                                    <button className="btn btn-primary">Update All</button>
                                    <button onClick={()=>handledelete(user._id)} className="btn btn-danger m-2">Delete user</button>
                                
                                    </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;