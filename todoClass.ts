import {toDoInterface} from './interface';

class toDoClass implements toDoInterface{
    myTasks: Array<string> = [];
    addTask(task: string): number {
        return this.myTasks.push(task);
    }
    listAllTasks():void {
        for (let i = 0; i < this.myTasks.length - 1; i++) {
            console.log(this.myTasks[i]);
        }
    }
    deleteTask(task: string): number {
        let index: number = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item " + task + " found and deleted!");
        }
        else {
            console.log("Item " + task + " not found!");
        }
    
        return this.myTasks.length;
    }
}

let testClass = new toDoClass();
testClass.addTask("Element1");
testClass.addTask("Element2");
testClass.addTask("Element3");
testClass.listAllTasks();
testClass.deleteTask("Element2");
testClass.listAllTasks();