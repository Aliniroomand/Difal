import { Navigate, Route, Routes } from "react-router-dom"
// pages
import HomePage from '../pages/HomePage'
import AuthPage from "../pages/AuthPage"
import DashbordPage from "../pages/DashbordPage"
import AdminPage from "../pages/AdminPage"
import NotFound from "../pages/NotFound"
// React Query and its options
import { useQuery } from "@tanstack/react-query"
// services and helpers
import {userInformations} from "../services/GetUserProfile"
import Loader from "../modules/Loader"
import { getCookie } from "../utils/cookie"
import toast from "react-hot-toast"


const Router =()=> {
    const { data, isLoading, error } = useQuery({
        queryKey: ["profile"],
        queryFn: userInformations,
        staleTime:Infinity,
        cacheTime:Infinity,
      }) ;

if(isLoading) return <Loader/>;
if(error) return toast.error("مشکلی پیش آمده،دوباره امتحان کنید")
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/dashbord" element={data ? <DashbordPage/> : <Navigate to="/auth"/>}/>
            <Route path="/auth" element={data ?<Navigate to="/dashbord"/> : <AuthPage/>}/>
            <Route path="/admin" element={data && data.data.role==="ADMIN"?<AdminPage/> : <Navigate to="/"/> }/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default Router