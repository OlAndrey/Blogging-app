import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://blogging-app-sooty.vercel.app/api'
})

instance.interceptors.request.use((config) => {
  config.headers.authorization = window.localStorage.getItem('userToken')

  return config
})

export default instance
