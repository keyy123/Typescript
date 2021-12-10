type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) => {
    //You can destructure the properties from the type and give it a default value
    //const {property name = value} = props
    const {messageCount = 0} = props
    return (
        <div>
            {props.isLoggedIn?<h2>Welcome!{props.name} You have {messageCount} unread messages</h2>:<h2>Welcome Guest</h2>}
        </div>
    )
}

// Lesson 3 - Typing Props - Codevultion - React TS
// Lesson 4 - Basic Props 