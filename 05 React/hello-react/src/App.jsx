// import React from 'react'
import React,{ Fragment } from 'react'
import './App.css'

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
 <h1> 
    Hello React
    </h1>
    <h2>
      This is my first React App
    </h2>
    <p>a is :{a}</p>
    <p>b is :{b}</p>
    <p>a+b is :{a+b}</p>
    </>
    /* </Fragment> */
  // </React.Fragment>
  )
}

export default App
