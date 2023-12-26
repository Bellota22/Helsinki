import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ShowData from './components/ShowData'
import { getAll, deletePerson, createPerson } from './api/persons'

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
    createPerson(personObject)

    setPersons([...persons, personObject])
    setNewName('')
    setNewNumber('')

  }
  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
    
    
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  console.log("🚀 ~ file: App.jsx:37 ~ App ~ personsToShow:", personsToShow)

  
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <FormPerson newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleClick={handleClick} />
      <ShowData personsToShow={personsToShow} handleDelete={handleDelete} />
      
    </div>
  )
}

export default App