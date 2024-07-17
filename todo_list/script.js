// script.js
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('done');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
