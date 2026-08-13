const image=document.getElementsByTagName('img')//Html collection
// // console.log(images);
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


const selector=document.querySelector('#first-img')
console.log(selector);
const images=document.querySelectorAll('.css-images')
console.log("images",images);
console.log("1st image",images[0]);
console.log("2nd image",images[1].src);
