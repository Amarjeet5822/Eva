
function deletedTaks() {
    window.location.href = "./deletedTask.html"
}
function home() {
    window.location.href = "./index.html"
}
function creatTask() {
    preventDefault()
    let userTask = document.getElementById("userTask");
    let typeTask = document.getElementById("priority");
    let divToAdd = document.getElementsByClassName("taskGet")
    
    divToAdd.append(creatTask);


}