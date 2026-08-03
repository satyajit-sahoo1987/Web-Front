// const hello=function greet(){

//     console.log("Hello Everyone!!!");
// }
// greet() //greet is not defined
// hello() //Hello Everyone!!!


const concat=function concatString(str1,str2){
    return str1+str2
     
}

// console.log(concat("Hello ","World!!!")) //Hello World!!!-
console.log(concat()) //Hello World!!!

//==============Annonymous Function========================
// function(a){
//     console.log("...........",a)
// }

//==============Arrow Function========================
// const add=(num1,num2)=>{
//     console.log("Adding two numbers");
//     return num1+num2
// }

const add=(name)=>(name+" is a good boy") //Implicit return
// const add=(name="Satya")=>(name+" is a good boy")
const result=add("Rahul"); //Adding two numbers
console.log(result);

