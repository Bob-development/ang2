import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: object[] = []

  constructor() {}

  getTasks(){
    return this.tasks;
  }

  getTasksLength(){
    return this.tasks.length;
  }

  addTask(task: object){
    this.tasks.push(task);
  }

  createTask(date: string, description: string, id: number, status: string){
    return {
      date: date,
      description: description,
      id: id,
      status: status
    }
  }

  findTaskId(id: number){
    const tasksId = [];
    
    this.tasks.forEach((task: {date: string, description: string, id: number, status: string}) => {
      tasksId.push(task.id);
    })

    const findedTaskIdx = tasksId.indexOf(id);

    return findedTaskIdx;
  }

  deleteTask(id: number){
    const taskIdx = this.findTaskId(id);

    this.tasks.splice(taskIdx, 1);
  }

  editTask(id: number, editedTask: {date: string, description: string, id: number}){
    const taskIdx = this.findTaskId(id);

    this.tasks[taskIdx] = editedTask;    
  }
}
