let number=[10,20,30,40,50];
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}
// number.forEach(function printNumbers(value,idx,arr){
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// })
//=========Named function========
// number.forEach(printNumbers);
// function printNumbers(value,idx,arr){
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// };

//=========Annonymous function=========
// number.forEach(function (value,idx,arr){
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// })
//==========Function expression========
// const printNumbers =function(value,idx,arr){
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// }
// number.forEach(printNumbers);

//
// number.forEach(function(value,idx,arr){
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// })

//=========Arrow function=========
// number.forEach((value,idx,arr)=>{
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
// })

// ====================Map method========================
// const numIncreaseTwo=number.map((value,idx,arr)=>{
//     console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
//     return value+2;
// });
// console.log(numIncreaseTwo);
const numSquareTwo=number.map((value,idx,arr)=>{
    console.log("Number is :",value,"Index pos :",idx,"Array is :",arr);
    // return value*value;
    // return idx+1;
    return value*value*value;
});
console.log(numSquareTwo);
//--------Array Of Object---------
const users=[
    {
        id:1,
        name:"Satyajit Sahoo",
        salary:10000
    },
    {
        id:2,
        name:"John Cena",
        salary:20000
    },
    {
        id:3,
        name:"Smith Stevh",
        salary:50000
    },
    {
        id:4,
        name:"Alice Nameer",
        salary:30000
    },
]
// const details=users.map((value1)=>{
//     return {
//         id:value1.id,
//         firstname:value1.name.split(" ")[0],
//         bonus:value1.salary*10/100
//     };
// });
// console.log(details)

const details=users.map(user=>({
id:user.id,
firstname:user.name.split(" ")[0],
bonus:user.salary*.10
}))
console.log(details);


//=========================Filter method=========================

numbers=[10,11,20,21,30,31];