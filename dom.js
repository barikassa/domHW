//!1. 
// const challange = [
//     {
//         challangeName: "clenTheCar",
//         isComplited: true,
//     },
//     {
//         challangeName: "writeYourName",
//         isComplited: false,
//     },
//     {
//         challangeName: "climbTheTree",
//         isComplited: false,
//     },
//     {
//         challangeName: "runForYuorLife",
//         isComplited: false,
//     },
//     {
//         challangeName: "finishTheTask",
//         isComplited: false,
//     }


// ]
// //!a+e+f


// for (let i = 0; i < challange.length; i++) {
//     challange[i].id = Math.ceil(Math.random() * 2001+1);
//     if(challange[i].isComplited){
//         document.write(`<p style="background: blue;">${challange[i].challangeName}, ${challange[i].isComplited}</p>`);
//     }else{
//         document.write(`<p>${challange[i].challangeName}, ${challange[i].isComplited}</p>`);

//     }

// }


// //!b+c+d
// var input = document.getElementById("input");
// var button = document.getElementById("button");
// var div = document.getElementById("div");
// button.onclick = function () {
//     var newObject = {
//         challangeName: input.value, isComplited: true
//     }

//     challange.push(newObject);
//     console.log(challange);
//     div.innerHTML+=`${newObject.challangeName},${newObject.isComplited}<br>`



// }
//!2 
// const movie = [
//     {
//         playerName: "ronaldo",
//         picture:"//cdn.pixabay.com/photo/2021/08/16/09/21/seagulls-6549872_960_720.jpg" ,     
//         players:["a","b","c"] 
//     },


//     { 
//         playerName: "messi",
//         picture:"//cdn.pixabay.com/photo/2017/09/11/15/58/sunset-2739472_960_720.jpg" ,
//         players:["d","e","f"] 
//     },
//     {
//         playerName:"maradona",
//         picture: "//cdn.pixabay.com/photo/2017/09/11/15/58/sunset-2739472_960_720.jpg" ,
//         players:["g","h","i"]
//     }
// ]

// for(let i=0;i<movie.length;i++){
//     document.write(`<p>${movie[i].playerName}${movie[i].players}</p><br>`);
//     document.write(`<img src="${movie[i].picture}"<br>>`)
// }
//!3. 
// var input=document.getElementById("input");
// var button=document.getElementById("button");
// var p=document.getElementById("p");
// button.onclick=function(){
//     document.write(input.value);

// }
//!4. 
// var input=document.getElementById("input");
// var button=document.getElementById("button");
// let array=[];
// button.onclick=function(){

//     let newObject={
//         firstName:"dani",
//         age:35,
//         hights:175,
//         color:"black"
//     }
// array.push(newObject);

//    document.write(array.newObject);
//    console.log(array);
// }
//!5. 
// var input=document.getElementById ("input1");
// var input=document.getElementById ("input2");
// var input=document.getElementById ("input3");
// var button=document.getElementById ("button");
// var array=[]
// button.onclick=function(){
//     inputArray={
//         namey:input1.value,
//         mail:input2.value,
//         age:input3.value
//     }
//     array.push(inputArray);
//     console.log(array);
//     document.write(inputArray.age);
// }
//!6. 
// var input=document.getElementById ("input1");
// var input=document.getElementById ("input2");
// var button=document.getElementById ("button");
// var man=[];
// button.onclick=function(){
// var man=[];
//       newman={
//           firstName:input1.value,
//           lastName:input2.value
//       }
//       man.push(newman);
//       console.log(newman);
//       document.write(newman.firstName, newman.lastName);
// }
//!7 
// var p = document.getElementById("p");
// for(let i=0;i<10;i++){
//     p.innerHTML+=`"${i}`;
// }
//!8. 
// var arrayMail = [
//     {
//         mail: "abc"
//     },
//     {
//         mail: "cde"
//     }

// ];


// button.onclick = function () {
//     for (let i = 0; i < arrayMail.length; i++) {
//         if (input.value == arrayMail[i].mail) {
//             console.log("its exist");
//             return;
//         }

//         else {
//             console.log("not exist");
//         }
//     }
// }
//!9. 
// var p = document.getElementById("p");
// var input = document.getElementById("input");
// var button = document.getElementById("button");
// button.onclick=function(){
//     console.log(p.innerText+=input.value + input.value.length);
//     document.write(p.innerText+=input.value + input.value.length);
// }
//!10 
// var arrayPerson=[];
// var input1= document.getElementById("input1");
// var input2= document.getElementById("input2");
// var input3= document.getElementById("input3");
// var input4= document.getElementById("input4");
// var button= document.getElementById("button");
// var div= document.getElementById("div");

// button.onclick=function(){
    
//     let newObject={
//         fullName:input1.value,
//         countryOrigin:input2.value,
//         age:input3.value,
//         flag:input4.value,

//     }
//     arrayPerson.push(newObject);
//     console.log(arrayPerson);
//     div.innerHTML += `<img src="${newObject.flag}">`
//     div.innerHTML += `<img src="${newObject.flag}"${newObject.fullName}${newObject.countryOrigin}>`

// }



 


