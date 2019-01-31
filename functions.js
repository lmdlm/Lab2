var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
}
function listAllTasks() {
    //foreach
    // myTasks.forEach(function (task) {
    //     console.log(task);
    // })
    //arrow function
    // myTasks.forEach((task) => {
    //     console.log(task)
    // })
    for (var i = 0; i < myTasks.length; i++) {
        console.log(myTasks[i]);
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task, 0);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("Item " + task + " found and deleted!");
    }
    else {
        console.log("Item " + task + " not found!");
    }
    return myTasks.length;
}
listAllTasks();
addTask("Element1");
addTask("Element2");
addTask("Element3");
listAllTasks();
deleteTask("Element2");
listAllTasks();
