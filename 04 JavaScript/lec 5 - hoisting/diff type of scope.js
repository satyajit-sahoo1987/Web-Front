// function demo(){
//     let x=10
//     if(true){
//         let y=20;
//         console.log(x);
//         console.log(y);
//         debugger
        
        
//     }
// }
// demo();

//Block scope-------
// {
//    debugger
//     var e=50
//     let f=60
//     console.log(e);
//     console.log(f);
    
// }
//  console.log(e);
//     console.log(f);

//Lexical Scope-------
var a=10;
let b=20;
function fun1(){
    debugger
    let x=10
    console.log(x);

    function fun2(){

        let y=20;
        console.log(y);
        console.log("value of x inside nested fun",x);

        function fun3(){
            console.log("Value of y inside fun3",y);
            console.log("Value of y inside fun3",x);
            console.log("Value of A inside fun3",a);
            console.log("Value of B inside fun3",b);
        }
        console.log("Before calling fun3");
        fun3()
        console.log("After calling fun3");
        
        }
        console.log("Before calling fun2")
        fun2()
        console.log("After calling fun2");
        
}
fun1()

