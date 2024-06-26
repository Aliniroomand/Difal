import api from "../configs/apiConfigs"
// sending OTP number
const SendOTP=async(mobile)=>{
    try{
        const response=await api.post('/auth/send-otp',{mobile})
        return {response}
    }catch(error){
        return {error}
    }
}

// checking OTP number
const CheckOTP=async(mobile,code)=>{
try {
    const response =await api.post("/auth/check-otp",{mobile,code})
    return {response}
} catch (error) {
    return {error}
}
}
 
export {SendOTP,CheckOTP}