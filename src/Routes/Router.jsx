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
import ProductINFOS from "../pages/ProductINFOS"
import { UserINFSQuery } from "../hooks/ReactQueriesHooks"


const Router =()=> {
    const { data, isLoading, error } = UserINFSQuery()
console.log(data);
if(isLoading) return <Loader/>;
return(
    (!data) ? 
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="*" element={<Navigate to="/auth"/>}/>
        </Routes>
        :
        <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/dashbord" element={data ? <DashbordPage/> : <Navigate to="/auth"/>}/>
        <Route path="/auth" element={data ?<Navigate to="/dashbord"/> : <AuthPage/>}/>
        <Route path="/admin" element={data && data.data.role==="ADMIN"?<AdminPage/> : <Navigate to="/"/> }/>
        <Route path="/product/:id" element={<ProductINFOS/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
   )
}
export default Router