// 
import { BASE_URL } from "./utils/contants.js";

let usersData = [];


let showUserDetailBtn = document.getElementById("show-users");
let tableBody = document.getElementById("user-details");


showUserDetailBtn.addEventListener("click",()=>{
    if(!usersData.length > 0){
        alert("Data is not fetch yet try again")
        return console.log("Data is not fetch yet try again");
    }
    
    let trData = '';
    usersData.forEach((item)=>{
         trData +=`
            <tr>
               <td>${item.id}</td>
               <td>${item.username}</td>
               <td>${item.Suite}</td>
               <td>${item.address.zipcode}</td>
               <td>${item.company.name}</td>
               <td>${item.phone}</td>
               <td>${item.address.street}</td>
               <td>${item.late}</td>
            </tr>
         `
    });
    console.log("trData: ",trData);
    tableBody.innerHTML = trData;
})


let fetchData = () => {

    fetch(BASE_URL).
    then((data) => data.json()).
    then(result=>{
      console.log("Result",result);
      usersData.push(...result)  // copy result elements to the empty usersData array
    }).
    catch((error) => {
        console.log("ERROR: while fetching user data ", error)
    }).finally(() => {
        console.log("Ops completed")
    })

}

fetchData();
