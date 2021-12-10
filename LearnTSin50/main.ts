export{}
// let helloWorld = "Hello"
// console.log(helloWorld)

// Variable Declarations

//Primitive Types in TS = boolean, string, and number

//To set a type for a variable use ':' after the variable name + type
//let/const <variable name>:type = ...


/*This is called setting up a type - its like making a unique type for any variable or function 
it can be given to anything [], variables, {}, functions, classes, etc.
type + typename = [...]
[...] = anything
*/

// // The value after the type below is called a literal which
// // is a literal value that can be used for a type in this case, type exp can literally only be 1 or 2 or ...7

// type exp = 1|2|3|4|5|6|7
// //These(|) are called union(s): They work like || in JS. 
// //This type can be 1 or 2 or 3 and so on 


//  let isNewbie:boolean;
//  let yearsOfExp:exp;
//  yearsOfExp = 1;

// if(yearsOfExp < 2)isNewbie = true;
// else isNewbie = false;

// const name:string="Kheyyon"

// console.log(isNewbie?`${name} is a newb at typescript`:`${name} knows typescript already`)

// Why have types?
/*

Static Type Checking to check for errors that you won't see in development

Intellisense*** - It will give you the right methods for the variables type
*/
//=====================================================================================
// Null vs Undefined
//=====================================================================================
/*These are subtypes in TS - these can be given to any other type
i.e., let answer:any=null/undefined
*/
// let n: null = null;
// let u:undefined = undefined

// let reciprocalLove:boolean = null
// let gameName:string = undefined

//=====================================================================================
// //Arrays in TS
//=====================================================================================

// /*Both notations are the same - there is no pros or cons to either so pick the one
// you like or understand the best 

// Below, we are making a variable of an array of numbers 
// */
// let list1: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3];

//=====================================================================================
//Tuples
//=====================================================================================

// // What if you have an array that has multiple types? ([1, {}, "hi"])

// /*TS has a type called a tuple which is a mixed type array */

// let person1:[string, number] = ['Kheyyon', 24]
// //The catch-22 with a tuple is it is fixed - the number of arguments/types is fixed
// //In this case, person1 will always be a 2 length array with a string as the 1st element and a number as the 2nd element always
// // let person1:[string, number] = [24 , 'Kheyyon'] or ['Kheyyon', 24, 25] = an error

//=====================================================================================
// // Enums
//=====================================================================================

// // enum Color{Red, Green, Blue};

// //You can set the value of the items within enum which can change index values
// enum Color{Red = 5, Green, Blue};
// //Green = 6, Blue = 7

// let c:Color = Color.Green
// console.log(c)
// //returns 1 b/c 0-indexing so Green = 1

//=====================================================================================
// //Any Type 
//=====================================================================================

// /*Any type allows you to use any and all types - conceptually, it is exactly like the dynamic type nature of JS
// so no static type checking which is very friendly to JS users.  */

// let randomValue: any = 10;
// randomValue = true;
// randomValue = 'Me';

// //Cons of the any type - TS
// /*The big disadvantage of this dynamic type is the same as JS: There won't be a error check before you run the code
// and you can use incompatable methods or calls on this type w/o TS returning an error b/c it won't check the any type  */

// let myVariable:any = 10;
// //myVar is a number - to us - any type to TS

// console.log(myVariable.name)
// //This is bad b/c myVar is not an object/enum

// myVariable();
// //X - myVar is not a callable function

// myVariable.toUpperCase();
// //X - myVar is not a string so it doesn't have string methods

//=====================================================================================
// //Type - unknown  
//=====================================================================================

// /*If you use type unknown you cant use the prototype methods or Obj. properties of the type*/

// let Variable:unknown = 10;

// // //Since Var is unknown type these methods/props don't work
// // Variable();
// // Variable.name;
// // Variable.toUpperCase();

// //One way to override it is to use (varName + as type) so TS allows methods to work

// (Variable as string).toUpperCase()
// //We telling TS that variable should be seen as a string

// function hasName(obj: any): obj is { name: string}{
// return !!obj&&
//     typeof obj === "object" &&
//     "name" in obj
// }
// //We set the function's arguments to any type which must be an object with a name key that is a string type
// //tell us whether or not its true that the arg exists & the arg's type is an "object" & "name" key exist in the arg  

// if(hasName(Variable)){
//     console.log(Variable.name)
// }
// //This works in overriding the unknown type for fxn calls and object props

//=====================================================================================
// //Type Inference - Guess the type
//=====================================================================================


// let a;
// a = 10;
// a = true;
// // This is how to avoid TS from inferring the variable's type 
// //Don't initialize the variable AT ALL!


// //Since we initialized the variable, TS is guessing that based on how we used
// //b that it is a number type. This is confirmed by the intellisense methods 
// //available using dot notation (b.method())

// let b = 20;

// // b.
// // b = true;
// //This is erroring out b/c TS infers that b is a number type

//=====================================================================================
// // Union Type
//=====================================================================================

// let multiType: number | boolean;
// multiType = 20;
// multiType = true;
// // It can be used when a library returns a type that you can control 
// // Union type has enough restrictions to ensure it is the types listed in the union & it gives intellisense to the union type

//=====================================================================================
//Functions in TS 
//=====================================================================================

//Static type checking for parameters

// function add(num1:number,num2:number){
//     return num1 + num2;
// }
// add(5,10);
// add(5, "10");
// add()


// //Determine the return of a function in TS + Default Parameters

// //It is done by adding : + type after the function parameters ()
// //i.e. function one(a:string,b:string):string{}

// function add(num1:number,num2:number = 10):number{
//     return num1 + num2;
// }
// add(5) 
// add(5,10)

// //B/c default param is 10 for num2 both calls are the same


// //We can also set default parameters like we do in JS. To use a default param,
// // you need to make the paramter required (no ?) and set it to a value



// //Optional Parameters - functions 

// //We can make a parameter optional by adding a ? at the end of a parameter name
// //This feature actually extends beyond functions and et cetera

// function minus(num1:number, num2?:number):number{
// if(num2)num1 - num2
// else return num1;
// }
// //Now this fxn can be call w/o parameters like it could in JS and not error out in TS

// //If there are required parameters then you must place the required params before (to the left of...) 
// //the optional parameters


// minus(5)

//=====================================================================================
// Interface
//=====================================================================================

//It is possible to make an object into a type in TS


// function fullName(person:{firstName:string, lastName:string}){
//     console.log(`${person.firstName} ${person.lastName}`)
// }

// let p = {
//     firstName: "Bruce",
//     lastName: "Wayne"
// }

// fullName(p)

/*
The above code was easy to do rn since the obj has only 2 props but imagine that you had an obj 
with many types. Maintanence would be too much work and the codebase would look confusing and scary  
- that is why interfaces exist in TS.

Interfaces make it easy to use objects as types w/o the tiring object notation

More importantly, all changes to person interface affects all code down stream

We can also edit the types of the interface like we would variables or fxn parameters 
via unions, optional sign, etc.
*/


// interface Person{
//     firstName:string,
//     lastName?:string
// }

// function fullName(person:Person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }

// let p = {
//     firstName:"Key",
//     lastName:"Par",
// }
// console.log(fullName(p))

// //Use case for optional props in interfaces are forms 

// //Not all inputs in a form are required which can be modified in the form inputs 

//=====================================================================================
//Classes
//=====================================================================================

class Family{
    //add access modifiers of public or private or protected
    protected familyName:string; 
    constructor(name:string){
        this.familyName = name;
    }
    greet = () => {
        console.log(`Good Morning ${this.familyName}`)
    }
}

class Bloodline extends Family{
    constructor(className:string){
        super(className);
    }
    fightingSpirit(){
        console.log(`Keep fighting ${this.familyName}`)
    }
}

let Kheyyon = new Family("Parker")
console.log(Kheyyon);
Kheyyon.greet()

let genes = new Bloodline("Fighter")

