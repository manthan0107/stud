import React from 'react'

function Eventfunction(props) {
    const clickHandle = () => {
        alert("You are accessing Google web-site now.")
    }

    return (
        <div>
            <h2>Hello {props.name}</h2>
            <a href="https://www.google.com/" onClick={clickHandle}>Visitv Google Website</a>
        </div>
    )
}

export default Eventfunction