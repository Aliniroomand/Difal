import api from "../configs/apiConfigs"


const addToCategory=(form)=> api.post("/category",form);

const getCategory=()=>api.get("/category");

const deleteCategory=(name)=>api.delete(`/category/${name}`)

export {addToCategory,getCategory,deleteCategory}