
import './App.css'
import CustomButton from './CustomButton';

function App() {
  const handleClick = (e,name) => {
    // console.log("Paragraph clicked....",e);
    console.log("Paragraph clicked:-",name,e);
    }
  function handleChange(e){
    // console.log("Input Change",e.target.name,"->",e.target.value);
    const {name,value} = e.target
    console.log("Input change detected:-",name,"->",value);
  }
 return (
  <>
{/* <p onClick={(e)=>console.log("p Clicked",e)}>Click Here...</p> */}
{/* <p onClick={(e)=>console.log("p Clicked",e.target)}>Click Here...</p> */}
{/* <p onClick={handleClick}>Click Here.....</p> */}
{/* <p onDoubleClick={handleClick}>Click Here.....</p> */}

<p onClick={(e)=>{handleClick(e,"React")}}>Click Here.....</p>
<input type="text" name="username" onChange={handleChange} />
<input type="text" name="email" onChange={handleChange} />

<CustomButton value={'Hii'}
  onClick={()=>console.log("Custom button clicked")}/>
  </>
 )
}


export default App
//simple JS function but having some speciaal feature
//hooks can only be used inside functional components
// hooks always start with 'use' prefix(useSate,useEffect,useReducer,useContext,useRef,useMemo)