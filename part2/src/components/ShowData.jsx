import React from 'react'
function ShowData({ personsToShow, handleDelete }) {
  
  if (personsToShow?.length === 0) {
    return <p>No matches, specify another filter</p>;
  }
  if (personsToShow?.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  // if (personsToShow?.length === 1) {
  //   return (
  //     <>
  //       <h2>{personsToShow[0].name.common}</h2>
  //       <p>capital {personsToShow[0].capital[0]}</p>
  //       <p>population {personsToShow[0].population}</p>
  //       <h2>languages</h2>
  //       <ul>
  //         {Object.values(personsToShow[0].languages).map(language => (
  //           <li key={language}>{language}</li>
  //         ))}
  //       </ul>
  //       <img
  //         src={personsToShow[0].flags.png}
  //         alt={`flag of ${personsToShow[0].name.common}`}
  //         width='200'
  //       />
  //     </>
  //   );
  // }
  return (
    <div>
      <h2>Countries</h2>
      {personsToShow?.map(person => (
        <>
        <p key={person.id}>{person.name} {person.number}
          <button key={person.id} onClick={() =>handleDelete(person.id)}>delete</button>
        </p>

        </>
      ))}
    </div>
  );
}


export default ShowData