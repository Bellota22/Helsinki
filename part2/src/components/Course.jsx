import React from 'react'

function Course({course}) {
  return (
    <div>
        <p>{course.name}</p>
        {
           course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>) 
        }
    </div>
  )
}

export default Course