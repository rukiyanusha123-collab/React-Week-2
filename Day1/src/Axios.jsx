import axios from "axios";
import { useState,useEffect } from "react";

function App(){
    const[user,setUser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
       .then((response)=>{
        setUser(response.data);
       })
    },[])
    return(
        <>
    <h1>Users</h1>
    {user.map((users)=>(
        <div key={users.id}>
            <h2>{users.name}</h2>
            <h3>{users.email}</h3>
        </div>
    ))}
    </>
)
}
export default App;

