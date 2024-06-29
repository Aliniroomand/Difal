import api from "../configs/apiConfigs"


const addToCategory=(form)=> api.post("/category",form);

export {addToCategory}