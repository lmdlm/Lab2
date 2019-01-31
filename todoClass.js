"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTasks.length - 1; i++) {
            console.log(this.myTasks[i]);
        }
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item " + task + " found and deleted!");
        }
        else {
            console.log("Item " + task + " not found!");
        }
        return this.myTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("Element1");
testClass.addTask("Element2");
testClass.addTask("Element3");
testClass.listAllTasks();
testClass.deleteTask("Element2");
testClass.listAllTasks();
