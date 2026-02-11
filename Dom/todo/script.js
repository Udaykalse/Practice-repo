// TaskFlow - Enhanced Todo List Application
// Initialization
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const tasksList = document.getElementById('tasks-list');
  const emptyState = document.getElementById('empty-state');
  const errorMessage = document.getElementById('error');
  const taskCountElement = document.getElementById('task-count');
  const completedCountElement = document.getElementById('completed-count');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // State
  let tasks = JSON.parse(localStorage.getItem('taskflow-tasks')) || [];
  let currentFilter = 'all';
  let dragSrcEl = null;
  
  // Initialize the app
  function init() {
    renderTasks();
    updateStats();
    setupEventListeners();
    console.log('TaskFlow initialized. Loaded', tasks.length, 'tasks.');
  }
  
  // Event Listeners Setup
  function setupEventListeners() {
    // Add task on button click
    addBtn.addEventListener('click', addTask);
    
    // Add task on Enter key
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
        // Add visual feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      }
    });
    
    // Filter tasks
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Set current filter
        currentFilter = this.dataset.filter;
        renderTasks();
      });
    });
    
    // Input focus effect
    taskInput.addEventListener('focus', function() {
      this.parentElement.style.boxShadow = '0 0 0 3px rgba(90, 149, 255, 0.2)';
    });
    
    taskInput.addEventListener('blur', function() {
      this.parentElement.style.boxShadow = 'none';
    });
    
    // Add some personality with a random motivational quote on load
    showMotivationalHint();
  }
  
  // Task Management Functions
  function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validate input
    if (!taskText) {
      showError('Please enter a task before adding!');
      shakeInput();
      return;
    }
    
    // Create task object
    const task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
      order: tasks.length
    };
    
    // Add to tasks array
    tasks.push(task);
    
    // Save to localStorage
    saveTasks();
    
    // Clear input
    taskInput.value = '';
    
    // Render tasks
    renderTasks();
    
    // Update stats
    updateStats();
    
    // Show success feedback
    showSuccessFeedback();
    
    // Hide empty state
    hideEmptyState();
  }
  
  function deleteTask(taskId) {
    // Find task index
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      // Remove with animation
      const taskElement = document.querySelector(`[data-id="${taskId}"]`);
      if (taskElement) {
        taskElement.style.transform = 'translateX(100%)';
        taskElement.style.opacity = '0';
        
        setTimeout(() => {
          tasks.splice(taskIndex, 1);
          saveTasks();
          renderTasks();
          updateStats();
        }, 300);
      }
    }
  }
  
  function toggleTaskCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
      updateStats();
      
      // Add completion animation
      const taskElement = document.querySelector(`[data-id="${taskId}"]`);
      if (taskElement) {
        taskElement.classList.add('pulse-once');
        setTimeout(() => {
          taskElement.classList.remove('pulse-once');
        }, 300);
      }
    }
  }
  
  function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    const taskElement = document.querySelector(`[data-id="${taskId}"] .taskname`);
    
    if (task && taskElement) {
      // Replace span with input for editing
      const currentText = taskElement.textContent;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentText;
      input.className = 'edit-input';
      
      // Style the input
      input.style.cssText = `
        width: 100%;
        padding: 8px;
        border: 2px solid #5a95ff;
        border-radius: 6px;
        font-size: 1.05rem;
        font-family: inherit;
        outline: none;
      `;
      
      // Replace span with input
      taskElement.replaceWith(input);
      input.focus();
      input.select();
      
      // Save on Enter or blur
      const saveEdit = () => {
        const newText = input.value.trim();
        if (newText && newText !== currentText) {
          task.text = newText;
          saveTasks();
          renderTasks();
        } else {
          renderTasks();
        }
      };
      
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          saveEdit();
        }
      });
      
      input.addEventListener('blur', saveEdit);
    }
  }
  
  // Rendering Functions
  function renderTasks() {
    // Filter tasks based on current filter
    let filteredTasks = tasks;
    if (currentFilter === 'pending') {
      filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    }
    
    // Sort tasks: incomplete first, then by creation date
    filteredTasks.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
    // Clear tasks list
    tasksList.innerHTML = '';
    
    // Render each task
    if (filteredTasks.length === 0) {
      showEmptyState();
    } else {
      hideEmptyState();
      filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
      });
    }
  }
  
  function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
    taskDiv.dataset.id = task.id;
    taskDiv.draggable = true;
    
    // Add drag and drop event listeners
    taskDiv.addEventListener('dragstart', handleDragStart);
    taskDiv.addEventListener('dragover', handleDragOver);
    taskDiv.addEventListener('drop', handleDrop);
    taskDiv.addEventListener('dragend', handleDragEnd);
    
    // Double-click to edit
    taskDiv.addEventListener('dblclick', () => editTask(task.id));
    
    taskDiv.innerHTML = `
      <input 
        type="checkbox" 
        class="task-check" 
        ${task.completed ? 'checked' : ''}
        aria-label="Mark task as ${task.completed ? 'incomplete' : 'complete'}"
      >
      <span class="taskname">${escapeHtml(task.text)}</span>
      <div class="actions">
        <button class="edit-btn" aria-label="Edit task">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" aria-label="Delete task">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    
    // Add event listeners to buttons
    const checkbox = taskDiv.querySelector('.task-check');
    const editBtn = taskDiv.querySelector('.edit-btn');
    const deleteBtn = taskDiv.querySelector('.delete-btn');
    
    checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      editTask(task.id);
    });
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });
    
    return taskDiv;
  }
  
  // Drag and Drop Functions
  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.classList.add('dragging');
  }
  
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (dragSrcEl !== this) {
      // Swap task order in the array
      const taskId1 = dragSrcEl.dataset.id;
      const taskId2 = this.dataset.id;
      
      const index1 = tasks.findIndex(task => task.id === taskId1);
      const index2 = tasks.findIndex(task => task.id === taskId2);
      
      if (index1 !== -1 && index2 !== -1) {
        // Swap tasks
        [tasks[index1], tasks[index2]] = [tasks[index2], tasks[index1]];
        saveTasks();
        renderTasks();
      }
    }
    
    return false;
  }
  
  function handleDragEnd() {
    this.classList.remove('dragging');
  }
  
  // UI Feedback Functions
  function showError(message) {
    errorMessage.querySelector('span').textContent = message;
    errorMessage.classList.add('show');
    
    // Hide error after 3 seconds
    setTimeout(() => {
      errorMessage.classList.remove('show');
    }, 3000);
  }
  
  function showSuccessFeedback() {
    // Visual feedback on add button
    addBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
    addBtn.style.backgroundColor = '#5cdd8b';
    
    setTimeout(() => {
      addBtn.innerHTML = '<i class="fas fa-plus"></i> Add Task';
      addBtn.style.backgroundColor = '';
    }, 1500);
  }
  
  function shakeInput() {
    taskInput.style.transform = 'translateX(10px)';
    taskInput.style.borderColor = '#ff5c5c';
    
    setTimeout(() => {
      taskInput.style.transform = 'translateX(-10px)';
    }, 50);
    
    setTimeout(() => {
      taskInput.style.transform = 'translateX(0)';
      taskInput.style.borderColor = '';
    }, 100);
  }
  
  function showEmptyState() {
    emptyState.style.display = 'block';
  }
  
  function hideEmptyState() {
    emptyState.style.display = 'none';
  }
  
  function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    taskCountElement.textContent = pendingTasks;
    completedCountElement.textContent = completedTasks;
    
    // Animate counter change
    animateCounter(taskCountElement, pendingTasks);
    animateCounter(completedCountElement, completedTasks);
  }
  
  function animateCounter(element, targetValue) {
    const currentValue = parseInt(element.textContent);
    const difference = targetValue - currentValue;
    
    if (difference !== 0) {
      element.style.transform = 'scale(1.2)';
      element.style.color = difference > 0 ? '#5a95ff' : '#ff5c5c';
      
      setTimeout(() => {
        element.textContent = targetValue;
        element.style.transform = 'scale(1)';
        element.style.color = '';
      }, 300);
    }
  }
  
  function showMotivationalHint() {
    const hints = [
      "Tip: Try breaking big tasks into smaller ones!",
      "You got this! One task at a time.",
      "Productivity is doing what needs to be done, when it needs to be done.",
      "Small progress is still progress!",
      "Check off completed tasks for a sense of accomplishment!"
    ];
    
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    
    // Show hint after 5 seconds
    setTimeout(() => {
      console.log(`💡 ${randomHint}`);
    }, 5000);
  }
  
  // Utility Functions
  function saveTasks() {
    localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
  }
  
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  // Add some CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .pulse-once {
      animation: pulse-once 0.3s ease-in-out;
    }
    
    @keyframes pulse-once {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .edit-input {
      transition: all 0.2s ease;
    }
  `;
  document.head.appendChild(style);
  
  // Initialize the app
  init();
  
  // Easter egg - console greeting
  console.log('%c✅ TaskFlow Loaded!', 'color: #5a95ff; font-size: 16px; font-weight: bold;');
  console.log('%cOrganize your tasks, boost your productivity!', 'color: #666;');
});