import axios from "axios"
const axiosconfigbase= axios.create({
    baseURL:"http://localhost:5000/api"
})
export default axiosconfigbase