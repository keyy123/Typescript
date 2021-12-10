import {Component} from "react"

type CounterProps = {
    message:string
}

type CounterState = {
    count:number
}

export class Counter extends Component<CounterProps,CounterState>{
state = {
    count: 0,
}

handleClick = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
}

render(){
    return (
        <div>
            <button onClick={this.handleClick}>Increment</button>
            {this.props.message} {this.state.count}
        </div>
    )
}
}

//Lesson 17 - Class Components 
//The 2 steps to type a class is to determine the type of props and state then give them the right type for there value
//message is most likely a string so type CounterProps = {message:string} 
//CounterState = {count:number}
//Step 2: Pass this into the class more specficially at the Component portion - class ... extends Component<type1, type2>
//You can omit types based on what you have and dont have in the class component - no state - no state type and vice versa