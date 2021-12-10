type HeadingProps = {
    children:string
}

export const Heading=(props:HeadingProps)=>{
    return <h2>{props.children}</h2>
}

//This will be on props.children - Lesson 5