import api from "../configs/apiConfigs";

const userInformations=()=> api.get("/user/whoami").then(response=> response||null);

export  {userInformations};