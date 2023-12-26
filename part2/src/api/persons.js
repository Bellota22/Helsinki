import axios from 'axios'

export const promise = axios.get('http://localhost:3001/persons')


export const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}