import { todos } from "../data/todo.js";

localStorage.setItem("todos",JSON.stringify(todos));

let todosData = JSON.parse(localStorage.getItem("todos"));
console.log("🚀 ~ todosData:", todosData);

// for(let i = 0; i<todosData.length; i++){
//     console.log(todosData[i].title)
// }

todosData.forEach((item)=>{
    console.log("tittle ",item.title)
    console.log("id ",item.id)
    console.log("userId: ",item.userId)

})

// map method

// let udpatedTodos = todosData.map((item)=>{
//     return {
//         todoTitle:item.title,
//         todoBody:item.body
//     }
// }
// )
// console.log("🚀 ~ udpatedTodos ~ udpatedTodos:", udpatedTodos)




