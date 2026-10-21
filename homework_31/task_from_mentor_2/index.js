const postsURL = "https://jsonplaceholder.typicode.com/posts/";
const summaryTitle = document.querySelector(".summary__title");
const summaryTable = document.querySelector(".summary__table");
const summaryTableBody = summaryTable.querySelector(":scope > tbody");
const summaryError = document.querySelector(".summary__error");


// ЗАВДАННЯ №1

// const loadPosts = (postsURL) => {
//     fetch(postsURL)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Posts can't be retrieved!");
//             }

//             return response.json();
//         })
//         .then(posts => {
//             handleSuccess(posts);
//         })
//         .catch(error => {
//             handleError(error);
//         })
// };

// loadPosts(postsURL);


// ЗАВДАННЯ №2

const loadPosts = async (postsURL) => {
    try {
        const response = await fetch(postsURL);
        if (!response.ok) {
            throw new Error("Posts can't be retrieved!");
        }
        const posts = await response.json();

        handleSuccess(posts);
    }
    catch (error) {
        handleError(error);
    }
};

loadPosts(postsURL);


// ФУНКЦІЇ-ХЕЛПЕРИ

const handleSuccess = (posts) => {
    if (Array.isArray(posts) && posts.length > 0) {
        const postsCount = posts.length;
        const firstPost = posts[0];
        const lastPost = posts[postsCount - 1];

        console.log(`Posts found: ${postsCount}`);
        console.log("First post:\n")
        console.log(firstPost);
        console.log("Last post:\n");
        console.log(lastPost);

        const firstPostElement = `
            <tr>
                <td>${firstPost.userId}</td>
                <td>${firstPost.id}</td>
                <td>${firstPost.title}</td>
                <td>${firstPost.body}</td>
            </tr>
        `;
        summaryTableBody.insertAdjacentHTML("beforeend", firstPostElement);

        const lastPostElement = `
            <tr>
                <td>${lastPost.userId}</td>
                <td>${lastPost.id}</td>
                <td>${lastPost.title}</td>
                <td>${lastPost.body}</td>
            </tr>
        `;
        summaryTableBody.insertAdjacentHTML("beforeend", lastPostElement);
    } else if (posts !== null && typeof posts === "object") {
        console.log(`Post with ID ${posts.id}:\n`);
        console.log(posts);

        const postElement = `
            <tr>
                <td>${posts.userId}</td>
                <td>${posts.id}</td>
                <td>${posts.title}</td>
                <td>${posts.body}</td>
            </tr>
        `;

        summaryTableBody.insertAdjacentHTML("beforeend", postElement);
    }
}


const handleError = (error) => {
    summaryTitle.hidden = true;
    summaryTable.hidden = true;
    summaryError.textContent = "Failed to retrieve posts!";
    summaryError.style.marginTop = "10px";
    console.error(error);
};