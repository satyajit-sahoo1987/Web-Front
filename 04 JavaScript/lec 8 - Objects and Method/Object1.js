// //multi-level Nested Object
// const employee={
//     id:101,
//     fullname:"Rahul Sahoo",

//     address:{
//         city:"Bhubaneswar",
//         state:"Odisha",

//         office:{
//             building:"Tech Tower",
//             floor:5,
//             chamber:{
//                 number:"A-101",
//                 seat:"s-21"
//             }
//         }
//     }
// };
// console.log(employee)
// console.log(employee.address)
// // console.log(employee["address"])
// // console.log(employee.address["city"])
// console.log(employee.address.city)
// console.log(employee.address.state)

// console.log(employee.address.office.floor)
// // console.log(employee.address.office["floor"])
// console.log(employee.address.office.building)
// // console.log(employee.address.office["building"])
// console.log(employee.address.office.chamber)
// // console.log(employee.address.office["chamber"])
// // employee.address.office=null;
// // console.log(employee.address.city);
// // console.log(employee.address.office);
// // console.log(employee.address.office?.building);

// employee.address.office.chamber=null;
// console.log(employee.address.office.chamber?.number);
// console.log(employee.address.office.chamber?.["number"]);
//=====================================================================
// const user={
//     name:"Ankit",
//     age:21
// }

//user={}  //error -> assignment to constant variable

// const Object
// 1.existing key can be updated
// 2.existing key can be deleted
// 3.new key can be deleted

// user.name="Raj"
// console.log(user);

// delete user.age
// console.log(user);

// user.address="BBSR"
// console.log(user);


/**
 * Object.seal()
 * 1.existing key can be updated
 * 2.existing key can't be deleted
 * 3.new key can't be added
 */

let employee={
    name:"Rahul Sahoo",
    age:25
}
Object.seal(employee);
console.log(employee);
employee.name="Satyajit Sahoo";
console.log(employee);
// employee.age=26;

delete employee.name;
console.log(employee);
employee.address="Bhubaneswar";
console.log(employee);
/**
 * Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the same object that was passed in.
 * 1.existing can not be updated
 * 2.existing key can't be deleted
 * 3.new key can't be added
 */
let student={
    name:"Rahul Sahoo",
    age:25
}
Object.seal(student);
console.log(student);
student.name="Satyajit Sahoo";
console.log(student);
// student.age=26;

delete student.name;
console.log(student);
student.address="Bhubaneswar";
console.log(student);


