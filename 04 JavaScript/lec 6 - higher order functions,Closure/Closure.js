// function f1(){
//     console.log("Function 1");
//     functionf2(){
//         console.log("Function 2");
        
//     }
// }
function increment(){
    let number=10
    return function plusOne(){
console.log("Adding one");
number++;
console.log("number value is :",number);

    }
}
const nestedFun=increment()
nestedFun()
nestedFun()