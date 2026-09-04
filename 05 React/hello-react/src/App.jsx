// import React from 'react'
import React,{ Fragment } from 'react'
import './App.css'
import MyComponent from './MyComponent.jsx'
import Product from "./Product.jsx"
import products from "./products"

function App() {
  const a =10
  const b=20
  return (
  // <div>
  //   <h1> 
  //   Hello React
  //   </h1>
  //   <h2>
  //     This is my first React App
  //   </h2>
  // </div>

  // <React.Fragment>
  // <Fragment>
    <>
 <h1 style={{backgroundColor: 'red', color:'yellow'}}> 
    Hello React
    </h1>
    <h2>
      This is my first React App
    </h2>
    <p>a is :{a}</p>
    <p>b is :{b}</p>
    <p>a+b is :{a+b}</p>
    {/* {MyComponent()} */}
    <MyComponent/>
    {/* <MyComponent></MyComponent> */}

     {/* <Product name="Watch" price="2500" description="This is a stylish watch" brand="rolex"/> */}
    {/* <Product name="Mobile" price="50000" brand="oppo"/> */}
    {/* <Product name="Books" price="1000" brand="Bharat Collection" production="21 nov 2026"/>  */}

    {products.map(product => (
     <Product name={product.name} price={product.price} description={product.description} brand={product.brand}/>
    ))};
    </>
    /* </Fragment> */
  // </React.Fragment>
  )
}

export default App
