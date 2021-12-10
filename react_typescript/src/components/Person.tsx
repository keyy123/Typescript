// type personProps = {
//     name:{
//         fName:string,
//         lName:string
//     }
// }
// // Since the name props value is an object we need to do the same for the type to use the personName obj
// export const Person = (props:personProps) => {
//     return (
//     <div>
//         {props.name.fName} {props.name.lName}
//         </div>
//     )
// }

import { personProps } from "./Person.types"

export const Person = (props:personProps) => {
    return (
    <div>
        {props.name.fName} {props.name.lName}
        </div>
    )
}

//Pro-Tip 2: Split Type Files From React Code + Import When Needed
//Like how we split our components in reaact to keep it clean, organized and easy to use, we can do the same with our types in React TS
//You can import and export types exactly like React components
//We can make a separate file: Naming convention is the <File name>.types.ts - file = Person.tsx = Person.types.ts
