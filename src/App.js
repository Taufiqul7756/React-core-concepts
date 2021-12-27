import logo from "./logo.svg";
import "./App.css";
import reactDom from "react-dom";

function App() {
  //const nayoks = ['Anwar', 'Zafor iqbal','alomgir', 'salman']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'PDF reader', price: '$6.99'},
    {name: 'Illustrator', price: '$96.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {/* <Product name={products[1]}></Product>
        <Product name={products[2]}></Product> */}
      </header>
    </div>
  );
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
