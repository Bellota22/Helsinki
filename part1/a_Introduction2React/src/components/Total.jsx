import React from 'react'

function Total(props) {
  const sum = props.props.reduce((acc, cur) => {
      console.log(acc, cur)
      return acc + cur.exercises
  }, 0)

  return (
    <>
        {
          sum
        }
    </>

  )
}

export default Total