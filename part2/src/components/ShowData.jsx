import React from 'react'

function ShowData({personsToShow}) {
  return (
    <>
        <h2>Numbers</h2>
      {
        personsToShow.map(person => 
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        )
      }
    </>
  )
}

export default ShowData