let myTasks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let tasksFromLocalStorage = JSON.parse( localStorage.getItem("myTasks") )

if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage
    renderTasks()
}

inputBtn.addEventListener("click", function() {
    myTasks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myTasks", JSON.stringify(myTasks) )
    renderTasks()
})

function renderTasks() {
    let taskList = ""
    for (let i = 0; i < myTasks.length; i++) {
        taskList += `<li> ${myTasks[i]} </li>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        DELETE</button>`
    }
    ulEl.innerHTML = taskList  


    const current_tasks = document.querySelectorAll(".delete");
        for ( var i=0 ; i < current_tasks.length ; i++) {
            current_tasks[i].onclick = function() { 
                this.parentNode.remove();
            }
        }        
}

deleteBtn.addEventListener ("dblclick", function() {
    localStorage.clear()
    myTasks = []
    
})
