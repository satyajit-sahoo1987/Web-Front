import { useState } from 'react'

function App() {
  console.log("App component rendered....");
// let count=0
const state = useState(0)
//useState(initial value) return an array of two values [current state value, function to update the state value]
// console.log("State:-",state[0]);
// console.log("State:-",state[1]);

const[count,setCount] = useState(0)
// const[count,setCountByTwo] = useState(0)

function increment(){
  // count++;
  // state[0]++
  // state[1](state[0]+1)

  // setCount(count+1)
  // setCount(++count)
  // console.log("incresing state",count);

// setCount(count+1)
// setCount(count+1)
// setCount(count+1)
// console.log("incresing state",count);

// setCount((prevState)=>{
//   console.log("prevState1",prevState);
//   console.log("count 1",count);
//   return prevState+1;
// })
// setCount((prevState)=>{
//   console.log("prevState2",prevState);
//   console.log("count 2",count);
//   return prevState+1;
// })
// setCount((prevState)=>{
//   console.log("prevState3",prevState);
//   console.log("count 3",count);
//   return prevState+1;   
// })

// setCount(prevState=>prevState+1)
// setCount(prevState=>prevState+1)
// setCount(prevState=>prevState+1)


}//normal js variable  whose value will not be preserved after re-rendering the component
function incrementByTwo(){
  setCount(count+2)
  console.log("incresing state ",count)
}
function decrement(){
  setCount(count==0? 0:count-1)
  //if the state is reassigned with the same value then the component won't be re-rendered
  //eg: if the state value is 0 and we try to re-assign 0 again then the component
  //wont be rendered due to React intelligence.On the otherhand if we assign other value instead of 0 React will 
  //re-render the component.
  console.log("decrese",count)
}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Counter App</h1>
    <br></br>
    <br></br>
    <button onClick={incrementByTwo}>Increase By 2</button>
    <br></br>
    <br></br>
    <button onClick={increment}>Increase</button>
    <br></br>
    <br></br>
    <button>{count}</button>
    <br></br>
    {/* <button>{count2}</button> */}
    <br></br>
    <br></br>
    <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default App
