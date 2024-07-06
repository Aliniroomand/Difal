import axios from "axios"
import { getCookie } from "../utils/cookie"
import toast from "react-hot-toast"
import api from "../configs/apiConfigs";

const accessToken=getCookie("accessToken");

const AddNewPostFunction=(formData)=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/post/create`,formData,
            {headers:{
                "Content-Type":"multipart/form-data",
                Authorization:`bearer ${accessToken}`}
            }).then(res=>(res.status===200)&&toast.success("پست با موفقیت افزوده شد"))
            .catch(err=>toast.error(`درخواست با خطا مواجه شد ، دلیل خطا ${err}`))

}

const getMyPosts=()=>api.get("/post/my");

const getAllPosts=()=>api.get("")

const deletePost=(id)=>api.delete(`/post/delete/${id}`)



export {AddNewPostFunction,getMyPosts,deletePost,getAllPosts}