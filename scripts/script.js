"use strict"

let todoControl = document.querySelector(".todo-control"),
    headerInput = document.querySelector(".header-input"),
    todoList = document.querySelector(".todo-list"),
    todoCompleted = document.querySelector(".todo-completed");

const todoData = [

    // { value: 'Сварить кофе', completed: false},
    // { value: 'Помыть посуду', completed: true}
];

const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function (item) {
        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.value}</span>` +
            `<div class="todo-buttons"> ` +
            `<button class="todo-remove"></button>` +
            `<button class="todo-complete"></button>` +
            `</div>`;
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        const btnTodoCompleted = li.querySelector('.todo-complete');
        btnTodoCompleted.addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });

        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', () => {
            todoData.splice(item, 1);
            localStorage.setItem('todo', JSON.stringify(item));
            render();
        });

    });
}
todoControl.addEventListener("submit", function (event) {
    event.preventDefault();
    if (headerInput.value !== '') {
        let newTodo = {
            value: headerInput.value,
            completed: false
        };
        todoData.push(newTodo);
        todoData.forEach(function (item) {
            localStorage.setItem('todo', JSON.stringify(item));
        });
        headerInput.value = '';

        render();
    }

});