import axios from 'axios'
import queryString from 'query-string'
// import { useHistory } from 'react-router-dom'

const axiosClient = axios.create({
  baseURL: 'https://arcane-beach-58118.herokuapp.com/api/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})

// const jwtTokenKey = 'jwtToken'

// export const AxiosSetupInterceptors = () => {
//   const history = useHistory()

//   axiosClient.interceptors.request.use(async config => {
//     const token = localStorage.getItem(jwtTokenKey) || ''

//     if (config.headers) {
//       config.headers['authorization'] = token
//     }

//     return config
//   })

//   axiosClient.interceptors.response.use(
//     response => {
//       return response
//     },
//     error => {
//       if (error.response) {
//         const { status } = error.response

//         if (status === 401 || status === 403) {
//           localStorage.removeItem(jwtTokenKey)
//           history.push('/')
//         }

//         throw error
//       }
//     },
//   )

//   return null
// }

export default axiosClient
