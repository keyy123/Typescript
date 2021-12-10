type OscarProps = {
   children:React.ReactNode 
}


export const Oscar=(props:OscarProps)=>{
return <div>{props.children}</div>
}

//another variant of children when a react component is the child 
//If on react v16 import React at the top of the componebt if v17 don't worry about it
//React.ReactNode type is a type that include all possible types that a react component can be 
//The react equivalnet of any 
//Lesson 5