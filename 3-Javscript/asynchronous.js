// javascript is synchrounous by default
// We need some part of javascript code to be asynchronous
// how we do that
// there are some methods
// 1. use brower api like setTimeout(func,time)
// func: annonymous function

// let test ={
//     key:2,
//     key2:4
// }
// var x;

// var x;
// var mateen;

// console.log(x)

                                        // SetTimeOut ///

// let startTime = Date.now();

// let user={
//     fname:"Raza",
//     lname:"Ullah"
// }

// console.log("Header");



// setTimeout(()=>{

//     for(var i = 0; i< 10000; i++){
//         console.log("body");
//     }

// },5000)

// console.log("Footer")

// let endTime = Date.now();

// console.log(`Total Time: ${(endTime-startTime)/1000} ms`)

                                     // Immediatly invocked function Experesion (IIFE)

// getImage('./image.png',(image,error)=>{
//     if(error) throw new Error(error);
//     compressedImage(image,(compressedImage,error)=>{
//         if(error) throw new Error(error);
//         applyFilter(compressedImage,(result, error)=>{
//             if(error) throw new Error(error);
//             saveImage(result,(status,error)=>{
//                 if(error) throw new Error(error);
//                 console.log(status);
//             })
//         })
//     })

// // })
// function getImage(file) {
//     new Promise((res, rej) => {
//         try {
//             let data = "https/example.com/file";
//             res(data)
//         } catch (error) {
//             rej(new Error(`Error while saving the image ${error}`))
//         }

//     })
// }

// getImage('file.png').then((data) => console.log(data)).catch((error) => console.log(error)).finally(() => {

// })
                                           /// using Promise method //
// let complete = false;

// let prom = new Promise (function(resolve,rejected){
//     if (complete){
//         resolve("Wow! i am succesful");
//     }else{
//         rejected("sorry! we lost the match");
//     }
// });
// //    console.log(prom);

                                              //  Practice  //   

// function prom (complete){
//     return  new Promise (function(resolve,rejected){
//         if (complete){
//             resolve("Wow! i am succesful");
//         }else{
//             rejected("sorry! we lost the match");
//         }
//     });


// }
// let onfulfilment = (result)=>{
//      console.log(result);
// } 
// let onRejected = (error)=>{
//     console.log(error);
// } 
// prom(true).then(onfulfilment);
// prom(true).catch(onRejected);



// console.log(prom(ftrue));
                                                  //  Practice  //
// function prom  (complete){
//     if (complete){
//        console.log("wow i am succcesful");
//     }else{
//         console.log("Oh i have lost m future");
//     }
// }
// let onfulfilled = (result)=>{
// console.log(result);
// }
// let onRejected = (error)=>{
//     console.log(error);
// }

// prom(false).then(onfulfilled);
// prom(false).catch(onRejected);

// console.log(prom (false));
                                               //  Practice  //

function give(full) {
    return new Promise (function( resolve,reject){
        console.log("Fecthing,Data please wait")
  setTimeout(()=>{
    if (full) {
        resolve("hello sir i have won the match");
    } else {
        reject("Please,, leave me alone");
    }
  },3000);
    });
};

= 

give(false).then((outcoming) => {
    console.log(outcoming);
}).catch((gone) => {
    console.log(gone)});



// // console.log (give(false));

