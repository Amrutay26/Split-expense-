import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { login } from "../services/authservice";
import {search} from "../services/userservice";
const Login=()=>{
    const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


const handlelogin=async(e)=>{
    e.preventDefault();
    try{
       const res= await login({email,password});
        localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("token", res.data.token);
navigate('/dash');
    }
    catch(err){
        console.log(err.response?.data);
    }
}

return(
    <form onSubmit={handlelogin} style={{ padding: '40px', maxWidth: '350px', margin: '0 auto'} }>
        <h2>Login</h2>
<input
type="text"
placeholder="Email"
value={email}
 onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
/>
 <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button type="submit" style={{ width: '100%', padding: '8px' }}>Login</button>
    </form>
)
}

export default Login