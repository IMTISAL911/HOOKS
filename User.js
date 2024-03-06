import React from "react";
import { useEffect } from "react";

const User=(props)=>{
//     useEffect(()=>{

// alert("count is"+props.count)

//     },[props.count])

//     useEffect(()=>{

//         // alert("count is"+props.count)
//         console.warn("data is called")
        
//             },[props.data])

useEffect(()=>{
    alert("count is"+props.count)
},[props.count])

useEffect(()=>{
    console.log("data is called")
},[props.data])

    return(
        <>
        
         <h1>data props: {props.data} </h1>

    <h1>count props: {props.count} </h1>
        
        </>
    )
}
export default User