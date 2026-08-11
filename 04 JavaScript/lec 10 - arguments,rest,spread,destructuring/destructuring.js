let numbers=[10,20,30,40,50];
//either loop or extract one by one
// const[a,b,c,d,e]=numbers
// console.log(a,b,c,d,e);

// const[a,b,_,d,e]=numbers
// console.log(a,b,d,e);//10,20,40,50

// numbers=[100,200]
// const[a,b,c=1000,...rest]=numbers
// console.log(a,b,c,rest);

//=============================Destructuring Object===============
// const user={
//     id:101,
//     name:"Satya",
//     age:25,
//     salary:50000,
//     address:{
//         city:"bbsr",
//         pin:"755015"
//     }
// }
// const{id,name,age,...rest}=user
// console.log(id,name,age,rest);
// console.log(typeof rest);
// console.log(typeof id);
// console.log(typeof name);

//======================renaming-------------------------
// const{id:userId,name:userName,age,...rest}=user
// // console.log(id,name,age,rest);//reference error-erroeid is not defined
// console.log(userId,userName,age,rest);

//---------------------Q1---------------
//update employee state from target onject
    const employee={
    id:101,
    name:"Satya",
    age:25,
    salary:50000,
    address:{
        city:"bbsr",
        pin:"755015"
    }
}
function handleObj(target){
const{name,value}=target

employee[name]=value
// if(name === "id") {
  //   employee.id = value
  // } elseif(name === "age") {
  //   employee.age = value
  // }

  // switch(name) {
  //   case "id":
  //     employee.id = value
  // }
}

handleObj({name:"dept",value:"CSE"})
handleObj({name:"id",value:1001})
handleObj({name:"sal",value:10000})
console.log(employee);
