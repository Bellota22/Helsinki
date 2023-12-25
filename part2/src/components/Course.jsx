import React from 'react'

function Course({course}) {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
        <p>{course.name}</p>
        {
           course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>) 
        }

        <p><strong>total of {total} exercises</strong></p>
    </div>
    
  )
}

export default Course