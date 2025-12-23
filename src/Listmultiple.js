import React from 'react'

const Listmultiple = () => {
    let exp=[
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
  return (
    <div>
        <div>
        <h1>List of Products</h1>
        <h2>Product Name:{exp[0].name} & Price:{exp[0].price}</h2>
        </div>
      <div>
        <h1>List of Products with Price</h1>
        {exp.map((i)=>(<h2 key={i.id}>Product Name:{i.name} & Price:{i.price}</h2>))}
      </div>
      <div>
        <h1>List of Products in Table</h1>
        <table border="1">
            <thead>
                <tr>    
                    <th>Id</th>
                    <th>Product Name</th>   
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>   
                {exp.map((i)=>(<tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                </tr>))}
            </tbody>
        </table>  
      </div>
    </div>
    
  )
}

export default Listmultiple
/*const ListExample = () => {
    let exp = [
        {
            id: '1',
            title: 'daily expense',
            amount: 500
        },
        {
            id: '2',
            title: 'children education',
            amount: 50000
        },
        {
            id: '3',
            title: 'home loan',
            amount: 15000
        }
    ];

    return (
        <div>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{exp[0].id}</td>
                        <td>{exp[0].title}</td>
                        <td>{exp[0].amount}</td>
                    </tr>
                    <tr>
                        <td>{exp[1].id}</td>
                        <td>{exp[1].title}</td>
                        <td>{exp[1].amount}</td>
                    </tr>
                    <tr>
                        <td>{exp[2].id}</td>
                        <td>{exp[2].title}</td>
                        <td>{exp[2].amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListExample;
 */