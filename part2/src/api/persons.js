import axios from 'axios'


export const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}

export const deletePerson = async (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)

}

export const createPerson = (personObject) => {
    return axios.post('http://localhost:3001/persons', personObject)
}