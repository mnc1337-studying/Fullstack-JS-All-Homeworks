const todoForm = document.forms[0];
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoSpanDone = document.querySelector(".todo-span-done");
const todoSpanTotal = document.querySelector(".todo-span-total");


updateCounters();


todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoInputValue = todoInput.value.trim();

    if (todoInputValue.length === 0) {
        console.warn("Поле введення порожнє.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoInputValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "✕";

    li.append(deleteBtn);
    todoList.append(li);

    todoInput.focus();
    todoInput.value = "";
    updateCounters();
});


todoList.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li) return;

    const btn = event.target.closest("button");

    if (btn) {
        li.remove();
    } else {
        li.dataset.done = li.dataset.done !== "true";
    }

    updateCounters();
});


function updateCounters() {
    const totalCount = todoList.querySelectorAll(":scope > li").length;
    const doneCount = todoList.querySelectorAll(':scope > li[data-done="true"]').length;

    todoSpanTotal.textContent = totalCount;
    todoSpanDone.textContent = doneCount;
}