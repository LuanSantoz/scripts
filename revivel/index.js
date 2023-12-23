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

function checked() {
    this.classList.toggle('checked')
}

const tasksContainer = document.querySelector('#tasks')
const taskDesc = document.querySelector('#task-desc')
const addTaskBtn = document.querySelector('#add-task')

addTaskBtn.addEventListener('click', () => {
    const task = document.createElement('div')
    const taskName = document.createElement('p')
    const taskCheck = document.createElement('span')

    task.classList.add("task")
    taskCheck.classList.add("task-check")
    taskCheck.onclick = checked

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

showMenuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active')
    if (menuContainer.classList == 'active') {
        showMenuBtn.innerText = 'Close'
    } else {
        showMenuBtn.innerText = 'Open'
    }
})

// remove all tasks

const removeAllBtn = document.querySelector('#remove-all')

removeAllBtn.addEventListener('click', () => {
    const tasksCount = tasksContainer.childNodes
    console.log(tasksContainer.childNodes)
    for (let index = 0; index < tasksCount.length + 1; index++) {
        tasksContainer.removeChild(tasksCount[index])
    }
})