import { useQuery } from "@tanstack/react-query";
// functions
import { userInformations } from "../services/GetUserProfile";
import { getAllPosts } from "../services/Dashbord";
import { getCategory } from "../services/Admin";

export const AllProductsQuery=()=>{
  return useQuery({queryKey:["all-posts"],queryFn:getAllPosts})
}


export const UserINFSQuery =()=>{
    return useQuery({
    queryKey: ["profile"],
    queryFn: userInformations,
    staleTime:Infinity,
    cacheTime:Infinity,
  }) }

  export const ListOfCatergories=()=>{
    return useQuery({queryKey:["category-list"],queryFn:getCategory})
  }