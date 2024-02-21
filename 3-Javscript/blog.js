import { BASE_URL } from "./utils/contants.js";

let blogContainer = document.getElementById("blog-container");

let showPosts = () => {

    fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            console.log("🚀 ~ .then ~ result:", result)
            let postData = "";

            result.forEach((item) => {
                postData += `
                    <div class="blog-card">
                        <h2 class="blog-title">${item.title}</h2>
                        <p class="blog-body">${item.completed}</p>
                    </div>
                    `
            });

            blogContainer.innerHTML = postData;

        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Posts showed")
        })
}

showPosts();