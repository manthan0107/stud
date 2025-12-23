import React from 'react'

function ListPassEx() {
    let Sdata=[
        {
            id:1,name:'TV',price:45000
        },  
        {           
            id:2,name:'Laptop',price:55000
        },
        {
            id:3,name:'Mobile',price:25000
        }
    ];
    let i=0;
  return (
    <div>
        <h1>List of Products using Props</h1>
        {Sdata.map(d=><Display data={d} i={i+=1}/>)}

    </div>
  );
}
function Display({data,i}){
    return(
        <div>
            <h2>Product {i} : Name:{data.name} & Price:{data.price}</h2>
        </div>
    );
}
export default ListPassEx