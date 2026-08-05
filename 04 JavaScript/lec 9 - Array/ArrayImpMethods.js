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

// const details=users.map(user=>({
// id:user.id,
// firstname:user.name.split(" ")[0],
// bonus:user.salary*.10
// }))
// console.log(details);


//=========================Filter method=========================

// numbers=[10,11,20,21,30,31];
// const divisibleTen=numbers.filter((value,idx,arr)=>{
// console.log("Value is",value,"at index",idx," of array",arr);
// return value%10==0
// });
// console.log("divisible by 10",divisibleTen)

// const usersData = [
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }
// ];

// const active=usersData.filter((values,idx,arr)=>{
// return values.isActive==true;
// });
// console.log(active);
//-------------------2--------------
// const userName=usersData.map((values)=>values.name);
// console.log(userName);
//----------------------3----------------
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];
// const product=products.filter(product=>product.price>25000).map(product=>product.name)
// console.log(product);
// const pro=products.filter(product=>product.price>25000)
// const proname=pro.map(product=>product.name)
// console.log("proname is",proname);

// console.log(pro.map(product=>product.name))


//------------------4-----------------
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 }
];
const Stud=students.map((detail)=>{
return{
    name:detail.name,
    marks:detail.marks,
    result:detail.marks>=50?"Pass":detail.marks<50?"Fail":""
}
});
console.log(Stud)


//=======================some() & every()====================return value true and false type
// numbers=[10,21,30,40,50]
// const oddPresent=numbers.some(num=>num%2==1)
// console.log(oddPresent);

// const isEveryElementEven=numbers.every(num=>num%2==0)
// console.log(isEveryElementEven);

// const product=[
// {id:1,name:"Laptop",price:50000},
//     {id:2,name:"Mobile",price:20000},
//     {id:3,name:"Ipad",price:30000}
// ];
// const CheckProduct=product.some(products=>products.price>50000)
// console.log(CheckProduct);

// const CheckProduct1=product.every(products=>products.price>10000)
// console.log(CheckProduct1);


// const usersData = [
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }
// ];
// const UserData=usersData.some(Active=>Active.isActive)
// console.log(UserData);
// const UserData1=usersData.every(Active=>Active.isActive)
// console.log(UserData1);

//==========================find()====================
numbers=[10,20,30,41,40,51,]
const number1=numbers.find(num=>num==41)
console.log("is 41 found ",number1);

const numberIdx=numbers.findIndex(num=>num==41)
console.log("is 41 found ",numberIdx);

//------Q1==========
// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 },
//   { id: 3, name: "Tablet", price: 30000 }
// ];
const FindProductDetail=products.find(prod=>prod.id==2)
console.log(FindProductDetail.price);
//===========Q2==========

// const students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 }
// ];
const FindStudentDetail=students.find(student=>student.name=='C')
console.log(FindStudentDetail.marks);
