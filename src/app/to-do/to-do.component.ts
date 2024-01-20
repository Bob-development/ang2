import { Component } from '@angular/core';
import { TasksService } from "../services";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  constructor(
    public taskService: TasksService
  ){}

  getTasksLength(){
    return this.taskService.getTasks().length;
  }
}
