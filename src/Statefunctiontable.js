import React from 'react'

const Statefunctiontable = () => {
    // Demo of any number table data in react function component
    let [number, setNumber] = React.useState(1);
    const clickHandler = () => {
        setNumber(number + 1);
    }
    return (
    <div>
      <h2>Multiplication of Table 3</h2>
      <h2>3 x {number} = {3 * number}</h2>
      <button onClick={clickHandler}>Next</button>
    </div>
  )
}

export default Statefunctiontable
