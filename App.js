
//  HOOKS CLASS ONE 1


// import React from 'react';
// import './App.css';
// import { useState } from 'react';

// function App() {

//   const[data,setData]=useState("IMTISAL")

//   return (
//     <div className="App">
//       <h1>{data}!</h1>
//       <button onClick={()=>setData("HUSSAIN")}>update-dataa</button>
//     </div>
//   );
// }

// export default App;


                            //  HOOKS CLASS TWO 2


// import React from "react";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [Count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("  useEffect ")
//   })
//   return (
//     <>

//       <h1>useEffect hooks!{Count}</h1>
//       <button onClick={() => setCount(Count + 1)}>update Count</button>
//     </>
//   )
// }
// export default App


                            // HOOKS CLASS THREE 3

                            

 import React from "react";
 import { useEffect,useState } from "react";
 import User from "./User";
 
 function App(){
// const [data,setData]=useState(10)
// const [count,setCount]=useState(100)

const [data,setData]=useState(10);
const [count,setCount]=useState(100);

//   useEffect(()=>{

// console.warn("USE EFFECT DATA CALLED")

//   },[data])

//   useEffect(()=>{

//     // console.warn("useEffect COUNT CALLED")
//     alert("count is"+ count)
    
//       },[count])

  return(
    <>
    
    {/* <h1>data : {data} </h1>

    <h1>count : {count} </h1> */}

{/* <User count={count} data={data} /> */}

<User data={data} count={count} />


    {/* <button onClick={()=>setData(data+1)}>UPdate-data</button> 
<button onClick={()=>setCount(count+1)}>UPdate-count</button>     */}

<button onClick={()=>setData(data+1)}>update data</button>
<button onClick={()=>setCount(count+1)}>update count</button>

    </>
  )
 }

 export default App;