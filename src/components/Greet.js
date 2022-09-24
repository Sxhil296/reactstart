import React from 'react'

const Greet = (props) => {
  return (
    <div>
        <h1>Functional Components</h1>
        <h1>Hello {props.name} AKA {props.heroName}</h1>
        {props.children}
    </div>
  )
}

export default Greet