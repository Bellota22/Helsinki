import React from 'react'

function Course({courses}) {
    // const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
return (
   <>
    {
     courses.map(course => {
         return (
             <div key={course.id}>
                <h2>{course.name}</h2>
                <ul>
                    {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
                </ul>
                <p><strong>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
                
             </div>
         )
         })
    }

   </>
    
  )
}

export default Course