// Getting all required elements
const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () => {
    let userDate = inputBox.value
    if (userDate.trim() != 0) { // if value isn't only spaces
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
}
showTasks()


function addTask() {
    let userData = inputBox.value

    let getLocalStorage = localStorage.getItem("New Todo")
    console.log(getLocalStorage)
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
    addBtn.classList.remove("active")
}

inputBox.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) { // Pressed ENTER
        addTask();
    }
})

addBtn.onclick = () => {
    addTask()
}


function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNum = document.querySelector(".pendingNum")
    pendingNum.textContent = listArr.length
    if (listArr.length > 0) {
        deleteAllBtn.classList.add("active")
    } else {
        deleteAllBtn.classList.remove("active")
    }

    let newLitag = ''
    listArr.forEach((element, index) => {
        newLitag += `<li>${element}<span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`
    });

    todoList.innerHTML = newLitag
    inputBox.value = ''
}


function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}


deleteAllBtn.onclick = () => { 
    listArr = []
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}