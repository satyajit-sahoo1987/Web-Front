// // function fun(f1){
// //     console.log("Value of f1 is :",f1);
    
// // }
// // fun(10)
// // fun(true)
// // fun("JT")
// // function hello(f2){
// //     console.log("Hello Everyone!!!");
// //     return fun(100);
// // }
// // console.log(hello);
// // hello()

// // fun(hello())     
// // fun(hello())

// //--------------------
// function f3(){
//     console.log("This is f3 function ");
    
// }
// function f1(){
//     console.log('f1 function');
//     // return 101;
//     // return function f2(){
//     //     console.log('f2 function');
        
//     // }
//     return f3
    
// }
// let x=f1()
// console.log(x);
// x()

//========================================
//=============setTimeout,setInterval==============
// console.log(1);
// setTimeout(function f1(){
//     console.log(2);
    
// },3000)
// console.log(3);
//---------------


//------------setInterval
console.log(1);
setInterval(function f1(){
    console.log(2);
    
},3000)
console.log(3);
//---------------------------------------------------
    // function f1(){
    //     console.log("Hiiii");
        
    // }
    // const intervalId=setInterval(f1,2000)
    // // console.log(intervalId);
    // const timerId=setTimeout(function(){
    //     console.log("Clearing Interval");
    //     clearInterval(intervalId)
        
    // },10000)
// ------------------------------------------------
// const intervalId=setInterval(function fun(){
//     console.log("Hello....");
// },1000)
// setTimeout(() => {
//     clearInterval(intervalId)
//     console.log("STOPPED!!");
    
// }, 5000);

//-----------------------------------------------------------------------
// let count=1;
// let interval=setInterval(function f1(){
//     console.log(count);
//     count++;
//     if(count>5){
//         clearInterval(interval)
//     }
// },1000);



