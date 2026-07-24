//function declaration
//function <fun_name>(list of parame{}
// function myFun(){
//     console.log("Good morning everyone!!!")
// }
// myFun();

// function greet(name="jt"){
//     console.log("Good Morning",name,'!!!');
    
// }
// greet("Rahul",10,20);

// greet();

// greet(10);

// greet(false);

// function addJTTag(name){
//     return "j'tans"+name;
// }
// let updateName=addJTTag(" Satya");
// console.log(updateName);

// function add(x,y){
//     return "value is "+ (x+y);
    
// }
// let value=add(10,20);
// console.log(value)

//1---------------
function Hello(){
    console.log("Hello")
}
Hello();
function showDate(){
    console.log("24-07-2026");
    
}
showDate();
function showCollege(){
    console.log("Hi-Tech Institute of Techology");
    
}
showCollege();
function message(){
    console.log("Welcome to our JT");
    
}
message();
//Q2--------------------------
function showName(name='jT'){
    console.log("Name is:"+name);
    
}
showName("Java Technocrat")
function showAge(age='18'){
    console.log("I am "+age);
    
}
showAge(21); 
function printTable(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}   
printTable(5)
function multi(a,b){
    console.log("Multiple of a& b is "+(a*b));
    
}
multi(2,4)
//Q3--------------------------------
function add(s,b){
    return s+b;
}
 let val=add(19,18);
 console.log(val);

function isEligible(age){
    return age>=18;
}
 let age=isEligible(17);
 console.log(age);

function fullName(first,last){
    return first+" "+last;
}
 let name=fullName("Satyajit","Sahoo");
 console.log(name);
 
 function findLarge(a,b){
    return a>b?a:b;
 }
 let large=findLarge(22,19);
 console.log("Large number is "+large);
 