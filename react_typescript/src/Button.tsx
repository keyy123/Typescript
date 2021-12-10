import React from "react"

type ButtonProps = {
handleClick: (e:React.MouseEvent<HTMLButtonElement>, id:number)=> void
}
//when making an event listener we dont need to make a function in  a type/it can even be an api call
//we can set the value of the function/event listener to a callback/anonymous function 
//void keyword means nothing or in this case do nothing

export const Button = (props:ButtonProps) => {
return <button onClick={(e)=>props.handleClick(e,1)}>Click</button>
}

//Lesson 6 - event props
//average handleClick React event 