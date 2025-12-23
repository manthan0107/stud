import React from 'react'

const List = () => {
    const item = ['TV', 'Laptop', 'Mobile'];
    return (
        <>
            <div>
                <h1>List of Products</h1>
                <h2>{item[0]}</h2>
                <h2>{item[1]}</h2>
                <h2>{item[2]}</h2>
            </div>
            <div>
                <h2>Lisi Example Using map()</h2>
                {item.map((i) => (<h3>{i}</h3>))}
            </div>
            <div>
                <h2>Lisi Example Using map() in Li Ui</h2>
                {item.map((i) => <ul><li>{i}</li></ul>)}
            </div>
        </>
    )
}

export default List
