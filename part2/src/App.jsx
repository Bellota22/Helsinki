import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ShowData from './components/ShowData'
import { getAll } from './api/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    const promise = getAll()
    promise.then(response => setPersons(response.data))
  }
  , [])



  const handleClick = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}
    const sameName = persons.filter(person => person.name === newName)
    if (sameName.length > 0) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    setPersons([...persons, personObject])
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

 
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <FormPerson newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleClick={handleClick} />
      <ShowData personsToShow={personsToShow} />
      
    </div>
  )
}

export default App