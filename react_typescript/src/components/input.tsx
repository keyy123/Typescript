// import React from "react"

// type InputProps = {
//     value:string,
//     handleChange: (e:React.ChangeEvent<HTMLInputElement>)=> void
// }
// //The thing inside the <> is the HTML element that the handler is trying to change - <HTMLInputElement> changes an <input> elements
// export const Input = (props:InputProps) => {
//     //You can pass the event as a prop or make it inside the components like below:
//     // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
//     //     console.log(e)
//     // }
//     return <input type='text' value={props.value} onChange={props.handleChange}/>
// }
//Lesson 6 - event props
//HandleChange - event listener in React TS

import React from "react"

type InputProps = {
    value:string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=> void
}
export const Input = ({value, handleChange}:InputProps) => {
    
    return <input type='text' value={value} onChange={handleChange}/>
}

//Lesson 8  - Prop Types and Tips
//Pro Tip#1: destructuring props

//We can destructure the props instead of simply passsing in props to the function/named export fxn
// (props:InputProps) => ({value, handleChange}:InputProps) - the names come from the props in the InputProps type
//This means you have to replace the props.... with the destructured values - props.value -> value in this component only
