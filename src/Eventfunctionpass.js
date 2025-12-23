import React from 'react'

const Eventfunctionpass = () => {
    const clickHandle = (a) => {
        alert('Thank you ' + a)
    }
    return (
        <div>
            <h2>Welcome</h2>
            <button onClick={() => clickHandle('Het')}>Click Here</button>
        </div>
    )
}

export default Eventfunctionpass
