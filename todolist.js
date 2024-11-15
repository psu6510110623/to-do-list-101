const title = document.getElementById("title")
const taskList = document.getElementById("list-container")

function addTask() {
    tValue = title.value
    if(!tValue){
        alert("โปรดระบุหัวข้อ To do list ของท่าน")
        return 
    }
    const p = document.createElement("p")
    p.innerHTML = `
            <li>
                ${title.value}
            </li>
        `;
    taskList.appendChild(p);
    title.value = ''

    function taskDone(){
        p.style.color = "white"
        p.style.backgroundColor = "lightgreen"
        
        p.removeEventListener("click", taskDone )
    }
    p.addEventListener("click", taskDone)
    
    const removeBtn = document.createElement("button")
    removeBtn.appendChild(document.createTextNode("remove"))
    p.appendChild(removeBtn)

    function remove(){
        p.remove()
    }

    removeBtn.addEventListener("click", remove)
}
