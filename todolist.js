const title = document.getElementById("title")
const description = document.getElementById("description")
const taskList = document.getElementById("list-container")

function addTask() {
    const li = document.createElement("li")
    li.innerHTML = `
            <label>
                <input type="checkbox">
                <span> ${title.value} </span>
            </label> <br>
            <span> ${description.value} </span>

        `;
    taskList.appendChild(li);
}