import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://testwork-server.onrender.com/api'
})

//с каждым запросом на сервер из localStorage отправляется токен
instance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance