import axios from 'axios'
const axiosconfig=axios.create({
    baseURL:"http://localhost:5000/api/user"
})
export default axiosconfig