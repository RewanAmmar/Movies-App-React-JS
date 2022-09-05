import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"f5649c15b23fabb34a6f2aeddf741b4d"
    }
})

export default axiosInstance;