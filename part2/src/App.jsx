import React, { useState } from 'react'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ShowData from './components/ShowData'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ filter, setFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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