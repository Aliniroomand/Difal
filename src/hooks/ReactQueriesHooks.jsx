import { useQuery} from "@tanstack/react-query";
// functions
import { userInformations } from "../services/GetUserProfile";
import {  getAllPosts, getMyPosts } from "../services/Dashbord";
import { getCategory } from "../services/Admin";





const AllProductsQuery=()=>{
  return useQuery({queryKey:["all-posts"],queryFn:getAllPosts})
}


const UserINFSQuery =()=>{
  return useQuery({
    queryKey: ["profile"],
    queryFn: userInformations,
    staleTime:Infinity,
    cacheTime:Infinity,
  }) }
  
  const ListOfCatergories=()=>{
    return useQuery({queryKey:["category-list"],queryFn:getCategory})
  }

  const MyPostsListQuery=()=>{
    return useQuery({queryKey:["my-posts-list"],queryFn:getMyPosts})}
  

  export {AllProductsQuery,UserINFSQuery,ListOfCatergories,MyPostsListQuery}