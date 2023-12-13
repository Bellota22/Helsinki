import React from 'react'

function Content(props) {

    return (
    <>
        {
            props.props.map((part, i) => {
                return (
                    <p key={i}>{part.name} {part.exercises}</p>
                )
            })

           
        }
    </>
  )

}

export default Content