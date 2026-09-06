import React,{useState} from 'react'
import Greet from './Greet'
const App = () => {
  console.log("App Component");
  
  const[name,setName]=useState("Ram")

  const handleClick=(e)=>{
    setName(name+1)
  }
  return (
    <div style={{border:'2px solid black',padding:'20px'}}>
    <p>Parent Component State:-{name}</p>
    <Greet name={name}/>

    <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default App
// ==========Diff betwn State and Props==============
//1-> State is just like a local variable which is created inside the component while prop
//is a Object which is passed to an Component when the Component was called
//2->State is managed by the Component itself while props is being passed from Parent
//  Component to Child component