import React from 'react'

function FormPerson({newName, setNewName, newNumber, setNewNumber, handleClick}) {
  return (
    <>
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
    </>
  )
}

export default FormPerson