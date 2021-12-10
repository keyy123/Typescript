// import {useReducer} from 'react'

// type CounterState = {
//     count: number
// }

// type CounterAction ={
//     type:string,
//     payload:number
// }


// const initialState = {count: 0}

// function reducer(state: CounterState, action:CounterAction){
//     switch(action.type){
//         case 'increment':
//             return {count: state.count + action.payload}
//         case 'decrement':
//             return {count: state.count - action.payload}
//         default:
//             return state
//     }
// }

// export const Counter = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <>
//     Count: {state.count}
//     <button onClick={()=>dispatch({type: 'increment', payload:10})}>+10</button>
//     {/* 
//     Check that TS is working by  messing with the type in dispatch or the payload 
    
//     If you want to pass state and dispatch as props - hover over them in VS code and copy the value into a type and give the type to props
//     */}
//     <button onClick={()=>dispatch({type:'decrement', payload: 10})}>-10</button>
//         </>
//     )
// }

//lesson 12 - useReducers in TS


import {useReducer} from 'react'

type CounterState = {
    count: number
}

//
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction
// This block is a feature called discriminated unions = best wawy to handle types for reducer function in TS

const initialState = {count: 0}

function reducer(state: CounterState, action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return {count: 0}
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
    Count: {state.count}
    <button onClick={()=>dispatch({type: 'increment', payload:10})}>+10</button>
    <button onClick={()=>dispatch({type:'decrement', payload: 10})}>-10</button>
    <button onClick={()=>dispatch({type:'reset'})}>-10</button>

        </>
    )
}

//We have another issue: Basically as long as the type is a string it can be anything including things that 
// don't match our action types meaning we can ruin our function by editing the type w/o TS checking it 
// which is a huge issue

//In this case, using template literals and union types are a good way to handle the issue






//lesson 13 - useReducer Strict Action Types 