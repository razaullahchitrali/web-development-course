// normal function
// function printName(){
//     console.log("Raza Ullah");
// }
// Arrow func
// function === ()=>{}

// global var: document, window
// this is a keyword
// this == window


//  let user = {
//     fname: "Raza",
//     lname:"Ullah",
//     fullName: ()=>{
        // return  user.fname + "" + user.lname
       // return `${user.fname} ${user.lname}`;
//     }
//  }

//  console.log(user.fullName());


// let printName = ()=>{
//   console.log("Raza Ullah");
// }

// printName();

            //  Rest Operator  / 
            

// let userData = (fname,lname,...otherParams)=>{ // function define (parameters)
//     return otherParams;
// }

// console.log(userData("Raza", "Ullah","01-09-1999","Chitral","Peshawar"));  // function call (arguments)

let userData = (fullname="User name",age=20, ...otherParams) => { // start
    console.log("otherParams: ",otherParams) 
    
    

    return `Programmer: ${fullname} has age is ${age}`;  
}  // cloe

console.log(userData("Mateen",27,3))
