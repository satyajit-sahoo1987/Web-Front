// // const s1="Amit";
// // const s2="Sunita";
// // const s3="Satya";

// const students = ["Amit", "Sunita", "Satya"];
// // console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);//undefined
// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }   
// students[10]="Satyajit";
// console.log(students);
// console.log(students.length);
//======================Array Methodds=========================
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Grapes","Orange");
console.log(fruits)

fruits.pop();
console.log(fruits);

fruits.unshift("Cherry");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Apple",2));

console.log(fruits.indexOf("Apple"));//0
console.log(fruits.indexOf("Apple",2));//-1

// if(fruits.indexOf("Mango")!==-1){
    
//     console.log(fruits);
// }
//step1=>check mango is exist or not
if(fruits.includes("Mango")){
//step2=>if exist then print the array
const index1=fruits.indexOf("Mango");
//step3 =>then update the value in the index
fruits[index1]="Papaya";
}else{
//step4=>if not exist then do nothing
alert("Search element is not present");
}
console.log(fruits);
const numbers=[10,20,30];
const fruitsWithNumber=fruits.concat(numbers);
console.log(fruitsWithNumber);

const fruitsString=fruits.join('_');
console.log(fruitsString);

const reversedFruits=fruits.reverse();
console.log("After reverse",reversedFruits);

fruits.sort();
console.log("After sort",fruits);

const arr=[4,5,35,26,8];
console.log("Before sort",arr);

arr.sort(xyz);
function xyz(a,b){
    return a-b;
}
console.log("After sort",arr);