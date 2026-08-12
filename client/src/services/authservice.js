import api from './api'

export const login=async({email,password})=>{
    const response= await api.post('/api/auth/login',{email,password});
    return response;
}

export const register=async({name,email,password})=>{
    const response=await api.post('/api/auth/register',{name,email,password});
    return response;
}