import axios from "axios";
// cookies Handler
import { getCookie, setCookie } from "../utils/cookie";
import { GetNewToken } from "../services/GetNewToken";

const api = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})


// requests interceptor
api.interceptors.request.use(
    (request)=>{
        const accessToken=getCookie("accessToken")
        if(accessToken)
        request.headers["Authorization"]=`bearer ${accessToken}`
        
        return request
    },(error)=>{
        return Promise.reject(error)
    }
)

// response interceptor
api.interceptors.response.use(
    (response)=>{
        return response;
    },
    async(error)=>{
        const originalRequest=error.config;

         if(error.response.status === 401 ){
             const newToken=await GetNewToken();
             if(!newToken.response) return;
             setCookie(newToken.response.data)
             return api(originalRequest)
         }
    }

)


export default api;