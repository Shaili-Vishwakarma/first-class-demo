let req = prompt("Enter your todos request here!");
let todos = [];
while(true){
if(req == "quit") {
    console.log("YOU QUIT");
    break;
}
else if(req == "add") {
    let newTodo = prompt("Enter your new todo");
    todos.push(newTodo);
    console.log("Todo added");
}
else if(req == "list") {
    console.log(todos);
}
else if(req == "delete") {
    let index = prompt("Enter the index of the todo you want to delete");
    todos.splice(index, 1);
    console.log("Todo deleted");
}
else {
    console.log("Invalid request");
}
req = prompt("Enter your todos request here!");
}
