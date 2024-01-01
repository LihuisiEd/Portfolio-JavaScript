document.addEventListener('DOMContentLoaded', function () {
    const addTodoButton = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');
    const template = document.getElementById('template');
    const modal = document.getElementById('modal');
    const saveTodoButton = document.getElementById('saveTodo');
    const cancelTodoButton = document.getElementById('cancelTodo');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    let editingTodo = null;

    addTodoButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
        editingTodo = null; // Resetear la tarea en edición
    });

    saveTodoButton.addEventListener('click', function () {
        if (editingTodo) {
            // Modo de edición
            editingTodo.querySelector('h2').textContent = titleInput.value || 'New Task';
            editingTodo.querySelector('p').textContent = descriptionInput.value || 'Description of the new task';
        } else {
            // Modo de creación
            const newTodo = template.cloneNode(true);
            newTodo.classList.remove('hidden');
            newTodo.querySelector('h2').textContent = titleInput.value || 'New Task';
            newTodo.querySelector('p').textContent = descriptionInput.value || 'Description of the new task';
            todoList.appendChild(newTodo);

            // Añadir eventos de eliminación y edición
            addDeleteEditEventListeners(newTodo);
        }

        // Limpiar campos y ocultar modal
        titleInput.value = '';
        descriptionInput.value = '';
        modal.classList.add('hidden');
    });

    cancelTodoButton.addEventListener('click', function () {
        // Limpiar campos y ocultar modal
        titleInput.value = '';
        descriptionInput.value = '';
        modal.classList.add('hidden');
        editingTodo = null; 
    });

    function addDeleteEditEventListeners(todoItem) {
        // Botón de eliminar
        const deleteButton = todoItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            todoItem.remove();
        });

        // Botón de editar
        const editButton = todoItem.querySelector('.edit-button');
        editButton.addEventListener('click', function () {
            // Poner los datos actuales en el modal para editar
            titleInput.value = todoItem.querySelector('h2').textContent;
            descriptionInput.value = todoItem.querySelector('p').textContent;
            modal.classList.remove('hidden');
            editingTodo = todoItem; // Establecer la tarea en edición
        });
    }
});
