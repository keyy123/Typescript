import React, { createContext, useState } from "react"

export type AuthUser = {
    name:string
    email:string
}

type UserContextProviderProps = {
    children:React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
return (
<UserContext.Provider value={{user, setUser}}>
{children}
</UserContext.Provider>
)
}
//Lesson 15 - useContext Future Value  
//We passed state and setState to provider value and gave createContext a value as well 
// In this case (useContext's future value - we use type assertion to make it easier to write handler functions and avoid null checks in User.tsx)