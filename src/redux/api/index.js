import axios from 'axios'

const baseURL = 'https://www.omdbapi.com/?apiKey=d2e881d2'

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
})