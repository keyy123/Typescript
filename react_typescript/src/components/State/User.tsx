// import { useState } from "react"

// type AuthUser = {
//     name: string
//     email: string
// }


// export const User = () => {
// const [user, setUser] = useState<null| AuthUser>(null)
// //a way around TS type inference is to use <> to add types to useState - null or AuthUser type above work
// //Type for user stae can either be null or AuthUser 
// const handleLogin = () => {
//     setUser({
//         name: "Kheyyon",
//         email: "p@g.com"
//     })
//     //This is an example of how TS type inference could bite you - Since we passed null in as useState's initial
//     //value it assumes that user's type is null which means that we can't give it non-null values like strings or booleans
    
// }

// const handleLogout = ()=>{
//     setUser(null)
// }
// return (
//     <div>
//         <button onClick={handleLogin}>Login</button>
//         <button onClick={handleLogout}>Logout</button>
//         <div>User name is {user?.name}</div>
//         <div>User email is {user?.email}</div>
//     </div>
// )
// }

//Lesson 10 - useState 

import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}


export const User = () => {
const [user, setUser] = useState<AuthUser>({} as AuthUser)

const handleLogin = () => {
    setUser({
        name: "Kheyyon",
        email: "p@g.com"
    })
}

return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
)
}

//Lets say you know that user state wont be null + you dont like ? to access obj properties -you can 
// set value as type - {} as <type>

//This is basically us as coders telling TS that we know better and that the type will always be {} as type
//Its risky to do this since we can be wrong and its better to do it the way we had it before - do it only if you're confident





//Lesson 11 - useState Type Assertion