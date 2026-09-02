// const hello=function greet(){

//     console.log("Hello Everyone!!!");
// }
// greet() //greet is not defined
// hello() //Hello Everyone!!!


// const concat=function concatString(str1,str2){
//     return str1+str2
     
// }

// console.log(concat("Hello ","World!!!")) //Hello World!!!-
// console.log(concat("rahul","sahoo")) //Hello World!!!

//==============Annonymous Function========================
// function(a){
//     console.log("...........",a)
// }

//==============Arrow Function========================
// const add=(num1,num2)=>{
    // console.log("Adding two numbers"+(num1+num2));
    // return num1+num2
// }
// add(10,20) //Adding two numbers

// const add=(name)=>(name+" is a good boy") //Implicit return
const add=(name="Satya")=>(name+" is a good boy")
const result=add("Rahul"); //Adding two numbers
console.log(result);

