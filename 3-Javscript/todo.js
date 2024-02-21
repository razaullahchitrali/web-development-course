import { BASE_URL } from "./utils/contants.js";

let todoContainer = document.getElementById("todo-container");

let todoElement = () => {
    
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            console.log("🚀 ~ .then ~ result:", result)

            let todosData = "";
            result.forEach((item) => {
                todosData += `
                        <div class="block1">
                            <h2>Todo ${item.id}</h2>
                            <p> Title ${item.title}</p>
                            <p>Complete ${item.completed}</p>
                    </div>`
                    });

              todoContainer.innerHTML=todosData;            
 
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("mission has passed");
        })
};
todoElement();