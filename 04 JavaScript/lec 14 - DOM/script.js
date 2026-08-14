// const image=document.getElementsByTagName('img')//Html collection/
// console.log(image);
// // console.log(images[0]);
// // console.dir(images[0]);
// console.log(image[2].src)
// const urls=[
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuMvPQXqxTXwNe8eBuFb9cz0IrP9hKV4g9qgdnOBY7w&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7a3R9Uhzu7MsAUDfMUXczQ19TDE6Kt4utNtpvFPX4Q&s=10",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhhgVnls05uaTh5hzf0MA9AJdWjzr4SZAVl1i0upz9g&s=10"
// ]
//---------------for loop----------------
// // for(let i=0;i<images.length;i++){
// //     images[i].src=urls[i]
// // }
//-------------for each------------------
// urls.forEach((url,idx)=>image[idx].src=url)

//--------------------get element by class name--------------------
// const imagesByClassName=document.getElementsByClassName('css-images')
// console.log(imagesByClassName);
// console.log(imagesByClassName[2].src);

//-------------------get element by id name----------------------
// const firstImageById = document.getElementById('first-img')
// console.log(firstImageById);


// const selector=document.querySelector('#first-img')
// console.log(selector);
// const images=document.querySelectorAll('.css-images')
// console.log("images",images);
// console.log("1st image",images[0]);
// console.log("2nd image",images[1].src);


//=====================================================
// console.log(document.querySelector("[username]"));
// console.log(document.querySelectorAll("[username]"));
// console.log(document.querySelector("[username='Satya']"));


// const h2=document.querySelector('[username=Satya]')
// console.log(h2.getAttribute('username'));

// // console.log(document.querySelector("document.querySelector("body > p:nth-child(8)));
// // const img=document.querySelector("#first-img").setAttribute("src","data:image/jpeg;base64,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")
// console.log(img)

// document.querySelector("body > h2:nth-child(3)").setAttribute("style","color:red")
// document.querySelector("body > h2:nth-child(3)").setAttribute("style","background-color:black")

// document.querySelector("body > h2:nth-child(3)").classList
// document.querySelector("body > h2:nth-child(3)").setAttribute("class","red")
// document.querySelector("body > h2:nth-child(3)").setAttribute("class","bgColor")

//======================classList======================
// document.querySelector("body > h2:nth-child(3)").classList
// DOMTokenList [value: '']
// document.querySelector("body > h2:nth-child(3)").classList.add("red")
// document.querySelector("body > h2:nth-child(3)").classList.add("bgColor")
// document.querySelector("body > h2:nth-child(3)").classList
// DOMTokenList(2) ['red', 'bgColor', value: 'red bgColor']
// document.querySelector("body > h2:nth-child(3)").classList.remove("bgColor")
// undefined
// document.querySelector("body > h2:nth-child(3)").classList.add("bgColorw")
// undefined
// document.querySelector("body > h2:nth-child(3)").classList
// DOMTokenList(2) ['red', 'bgColorw', value: 'red bgColorw']
// document.querySelector("body > h2:nth-child(3)").classList.add("bgColor")
// undefined
// document.querySelector("body > h2:nth-child(3)").classList
// DOMTokenList(3) ['red', 'bgColorw', 'bgColor', value: 'red bgColorw bgColor']
// document.querySelector("body > h2:nth-child(3)").classList.remove("bgColorw")
// undefined
// document.querySelector("body > h2:nth-child(3)").classList
// DOMTokenList(2) ['red', 'bgColor', value: 'red bgColor']

//-------------toggle---------
const toggle=document.querySelector("body > h2:nth-child(3)").classList.toggle("red")
console.log(toggle);
//Accessing Parent
