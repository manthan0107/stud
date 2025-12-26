import React from 'react'

function Statefunctionupdate() {
    let [message, setMessage] = React.useState('Welcome to ReactJS');   
    const clickHandler = () => {
        setMessage('Thanks for subscribing ReactJS');
    }
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={clickHandler}>Subscribe</button>
    </div>
  )
}

export default Statefunctionupdate
