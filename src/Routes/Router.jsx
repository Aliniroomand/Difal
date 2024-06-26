import { Route, Routes } from "react-router-dom"
// pages
import HomePage from '../pages/HomePage'
import AuthPage from "../pages/AuthPage"
import DashbordPage from "../pages/DashbordPage"
import AdminPage from "../pages/AdminPage"
import NotFound from "../pages/NotFound"
// React Query and its options
import { useQuery } from "@tanstack/react-query"
import userInformations from "../services/GetUserProfile"

const Router =()=> {
    const {data , isLoading , error}= useQuery({queryKey:["profile"],queryFn:userInformations});

    console.log({data , isLoading , error});

    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/dashbord" element={<DashbordPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}
export default Router