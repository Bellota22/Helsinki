import React from 'react'

function Content({parts, exercises}) {
  return (
    <>
        {
            Object.keys(parts).map((key, index) => {
                return (
                    <p key={index}>
                        {parts[key]} {exercises[key]}
                    </p>
                )
            })
        }
        
    </>
  )
}

export default Content