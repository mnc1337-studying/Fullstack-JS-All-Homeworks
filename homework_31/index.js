const todosURL = "https://6ad75f9395e98f36aef25cbb.mockapi.io/todos";
const todosURLWithID = "https://6ad75f9395e98f36aef25cbb.mockapi.io/todos/36";


const payloadForPost = {
    "title": "Task, added using POST method",
    "finished": true,
    "creation_day": "Tuesday"
}


const handleTodos = (url, method) => {
    method = method.toUpperCase();
    switch (method) {
        case "GET":
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Expected status code in range 200-299, while ${url} responded with ${response.status} (${response.statusText})`);
                    }

                    return response.json();
                })
                .then(responseData => {
                    console.log(`Data from ${url}:\n`);
                    console.log(responseData);
                })
                .catch(error => {
                    console.error(`GET failed (URL: ${url})\n${error}`);
                })
        case "POST":
            return fetch(url, {
                "method": "POST",
                "body": JSON.stringify(payloadForPost),
                "headers": {
                    "Content-Type": "application/json",
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Expected status code in range 200-299, while ${url} responded with ${response.status} (${response.statusText})`);
                    }

                    return response.json();
                })
                .then(responseData => {
                    console.log("Created object:\n");
                    console.log(responseData);
                })
                .catch(error => {
                    console.error(`POST failed (URL: ${url})\n${error}`);
                })
        case "DELETE":
            return fetch(url, {
                "method": "DELETE",
            })
                .then(response => {
                    if (response.status === 404) {
                        console.warn(`Object not found: ${url}`);
                        return;
                    }

                    if (response.status !== 200 && response.status !== 204) {
                        throw new Error(
                            `Unexpected status: ${response.status} (${response.statusText})`
                        );
                    }

                    console.log(`Object successfully deleted: ${url}`);
                })
                .catch(error => {
                    console.error(`DELETE failed (URL: ${url})\n${error}`);
                })
        default:
            console.warn("Method is unknown");
            break;
    }
}


const executeAllTodoHandlers = async () => {
    await handleTodos(todosURL, "GET");
    await handleTodos(todosURLWithID, "GET");
    await handleTodos(todosURL, "POST");
    await handleTodos(todosURLWithID, "DELETE");
};


setTimeout(executeAllTodoHandlers, 1000);