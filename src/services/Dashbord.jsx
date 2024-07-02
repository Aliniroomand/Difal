import axios from "axios"
import { getCookie } from "../utils/cookie"

const accessToken=getCookie("accessToken")
const AddNewPostFunction=({formData})=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/post/create`,formData,
            {headers:{
                "Content-Type":"multiplepart/form-data",
                Authorization:`bearer ${accessToken}`}
            })

}

export {AddNewPostFunction}