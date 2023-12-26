import axios from 'axios'



export const getAll = () => {
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
}

export const getName = (name) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
}