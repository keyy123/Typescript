import {Name} from "./Person.types"

type PersonListProps = {
    name:Name[]

   
    //since fullName is an array of objects we need the type to bw an array of objects - can be done using type + []
    //read from right to left:  This is an array of objects with properties fname - lname of tpye string which are properties of name property
    /*
    Most importantly, It is an array of objects = [{}...] so array methods work on it

    
    */
}

export const PersonList=(props:PersonListProps)=>{
return(
    <div>
        {props.name.map(el =>{
            return (
                <h2>{el.fName} {el.mName} {el.lName}</h2>
            )
        })}
    </div>
)
}

//Lesson 4 Basic Props 
//Lesson 8 - Prop Types and Tips