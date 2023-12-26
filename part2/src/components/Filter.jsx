import React from 'react'

function Filter({filter, setFilter}) {
  return (
    <>
    <h2>Phonebook</h2>
      <div>
      <p>Filter by name</p> 
      <input
        type='text'
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
       />

      </div>
    </>
  )
}

export default Filter