import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "Logged In":"Logged Out"}</div>
        </div>
    )
}

//Lesson 9 - useState Hook

//What is awesome is Type inference allows TS to guess what type our useState Hook is w/o us having to write up a
//single type - test it by using non-boolean methods on isLoggedIn or mess with the value in setIsLoggedIn
//If you hover over setIsLoggedIn you can see its type - React.Dispatch<React.SetStateAction<boolean>> - you dont have to type it out 