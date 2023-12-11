// modal for add task info

const dialog = document.querySelector('dialog')
const showModal = document.querySelector('#show-modal')
const closeModal = document.querySelector('#close-modal')

showModal.addEventListener('click', () => {
    dialog.showModal()
})

closeModal.addEventListener('click', () => {
    dialog.close()
})

// colect and add task

const tasksContainer = document.querySelector('#tasks')
const taskDesc = document.querySelector('#task-desc')
const addTaskBtn = document.querySelector('#add-task')

addTaskBtn.addEventListener('click', () => {
    const task = document.createElement('div')
    const taskName = document.createElement('p')
    const taskCheck = document.createElement('span')


    task.classList.add("task")
    taskCheck.classList.add("task-check")

    taskName.innerText = taskDesc.value

    task.appendChild(taskName)
    task.appendChild(taskCheck)

    if (taskDesc.value == "") {
        alert('Preencha o campo corretamente')
    } else {
        tasksContainer.appendChild(task)
        taskDesc.value = null
    }
})

// open and close menu with buttons

 const menuContainer = document.querySelector('#menu-container')
 const showMenuBtn = document.querySelector('#show-menu')
 const removeAllBtn = document.querySelector('#remove-all')

showMenuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active')
    if (menuContainer.classList == 'active') {
        showMenuBtn.innerText = 'Close'
    } else {
        showMenuBtn.innerText = 'Open'
    }
})