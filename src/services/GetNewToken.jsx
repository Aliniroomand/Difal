import api from "../configs/apiConfigs";
import { getCookie } from "../utils/cookie"

const GetNewToken=async()=>{
    const refreshToken=getCookie("refreshToken")
    if(!refreshToken) return;
    try{
        const response=await api.post("/auth/check-refresh-token",{refreshToken});
        return {response}
    }catch(error){
        return {error}
    }
}
export {GetNewToken}