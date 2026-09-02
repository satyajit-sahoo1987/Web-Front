// const user = {
//     firstname: "John",
//     lastname: "Cena",
//     age: 30,
//     isGraduate : true,
//     'address':'BBSR',
//     'Course-Fee': 50000.99,
//     greet : function(){
//         console.log(" Rahul Says Hello Everyone!!!",this);
//         console.log("My full name is:",this.fullname);
//     },
//     name:(name1,name2)=>{
//         console.log("Full name is :",name1, name2);
//     },
//     add:function(a,b){
//         console.log("Adding two numbers",a+b);
// }
// }
//extract complete object=================================
// console.log(user);

//extract single values from Object
// console.log("first name is :",user.firstname);
// console.log("last name is :",user.lastname);
// 
// console.log("Full name is :",user.firstname,  user.lastname); //ReferenceError: firstname is not defined

// console.log("age is :",user['age']);
// console.log("age is :",user["age"]);//right way to access the value of age
// console.log("age is :",user[age]);//error: age is not defined

// console.log("Course Fee is :",user['Course-Fee']);
// console.log("Course Fee is :",user.Course-Fee);//error: Course is not defined

// console.log("fullname is:",user.fullname)//undefined


//Add Key to Object================================================
// user.fullname="John Cena1";
// user.isGraduate=false;
// console.log("fullname is:",user.fullname);
// console.log(user);
// user.addhar=739922459297;
// console.log("Addhar number is :",user['addhar']);
// console.log("Addhar number is :",user.addhar);

//Accessing Object Method========================================
// user.greet();
// user.name("Satyajit","Sahoo");
// user.add(10,20);

//==============================================================
const employee={
    fullname:"Rahul Sahoo",
    age:25,
    address:{
        city:"BBSR",
        state:"Odisha",
        pincode:"751003"  
    }
}
console.log("Employee full name is :",employee.fullname);
console.log("Employee city is :",employee.address.city);
console.log("Employee state is :",employee.address.state);
console.log("Employee pincode is :",employee.address.pincode);
employee.address.pincode="751002";
console.log("Employee pincode is :",employee.address.pincode);
employee.address=null;
console.log(employee.address)
console.log(employee.address?.city)//undefined