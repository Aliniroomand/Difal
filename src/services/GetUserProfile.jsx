import api from "../configs/apiConfigs";

const userInformations=()=> api.get("/user/whoami").then(res=> res || false)

export default userInformations;