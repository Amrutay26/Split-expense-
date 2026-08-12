
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Dashboard=()=>{
      const navigate = useNavigate();
    const [profilename,setprofilename]=useState("");

useEffect(()=>{
    const name=localStorage.getItem("username");
    setprofilename(name);

},[]);
return(
    <div>
<h1>Hello back {profilename}</h1>

<button onClick={()=> navigate('/search')}>Create group</button>
<button> Requests</button>
</div>
);

};

export default Dashboard;