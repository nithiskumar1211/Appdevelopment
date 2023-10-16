import axios from "axios";

const authApi =axios.create({
    baseURL:"http://localhost:8080/auth"
    
})
const taskApi =axios.create({
    baseURL:"http://localhost:8080/task"
    
})
const projectApi =axios.create({
    baseURL:"http://localhost:8080/project"
    
})

export {authApi,taskApi,projectApi}
