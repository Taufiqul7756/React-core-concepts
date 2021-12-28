import logo from "./logo.svg";
import "./App.css";
import reactDom from "react-dom";
import { useEffect, useState } from "react";

function App() {
  const nayoks = ['Anwar', 'Zafor iqbal','Sakib', 'salman','Bappi','Shuvo']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'PDF reader', price: '$6.99'},
    {name: 'Illustrator', price: '$96.99'},
    {name: 'Premiere El', price: '$296.99'}
  ]

  const friends =[
    {name:'Taufiq', job: 'Student'},
    {name:'Tazwar', job: 'Prothom-alo'},
    {name:'Saiful', job: 'Student'},
    {name:'Ridu', job: 'Student'}
  ]
  const nayokNames = nayoks.map(nayok=> nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        
        <Counter>

        </Counter>
        <Users>
          
        </Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li> )
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        <ul>
          {
            friends.map(friends=> <li>{friends.name} </li>)
          }
        </ul>
        {
          products.map(pd=><Product product ={pd}></Product>)
        }


        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {/* <Product name={products[1]}></Product>
        <Product name={products[2]}></Product> */}
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers] =useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          console.log(users)
        }
      </ul>
      <ul>
        {
          users.map(user=> <li>{user.name} :{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count,setCount]= useState(0);
  const handleIncrease=()=>{
    //const newCount = count+1; //alternative way
    setCount(count+1);
  };
  // const handleDecreasar=()=>{
  //   //const newCount = count+1; //alternative way
  //   setCount(count-1);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle={
      border: '2px solid red',
      borderRadius: '5px',
      backgroundColor: 'cyan',
      height:'250px',
      width: '250px',
      float: 'left',
      margin: '5px'
  }
  const {name,price} = props.product;
  return(
      <div style={productStyle}>
          <h5>{name}</h5>
          <h5>{price}</h5>
          <button> Buy Now</button>
      </div>
  )
}

export default App;
