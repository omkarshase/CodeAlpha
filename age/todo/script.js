function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Check if the input is not empty
    if (taskInput.value.trim() !== '') {
      // Create a new list item
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Remove</button>
      `;
  
      // Append the new list item to the task list
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
  
    // Remove the parent list item of the clicked button
    taskList.removeChild(button.parentNode);
  }
  