import axios from "axios"
import { getCookie } from "../utils/cookie"
import toast from "react-hot-toast"

const accessToken=getCookie("accessToken")
const AddNewPostFunction=({formData})=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/post/create`,formData,
            {headers:{
                "Content-Type":"multipart/form-data",
                Authorization:`bearer ${accessToken}`}
            }).then(res=>(res.status===200)&&toast.success("آگهی با موفقیت ارسال شد"))
            .catch(err=>toast.error(`درخواست با خطا مواجه شد ، دلیل خطا ${err}`))

}

export {AddNewPostFunction}