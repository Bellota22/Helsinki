import React from 'react'

function Total({excersises}) {
    const sum = Object.values(excersises).reduce((a, b) => a + b, 0)
  return (
    <>
        {
            sum
        }
    </>

  )
}

export default Total