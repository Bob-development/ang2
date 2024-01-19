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

  addTask(task: object){
    this.tasks.push(task);
  }
}
