import React, { useState } from 'react'


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
      <h2>Phonebook</h2>
      <div>
      <p>Filter by name</p>
      <input
        type='text'
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
       />

      </div>
      <form>  
      <h2>Add New</h2>
        <div>
          name: 
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number:
          <input
            type='number'
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
           />
        </div>
        <div>
          <button onClick={handleClick} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        personsToShow.map(person => 
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        )
      }
      
    </div>
  )
}

export default App