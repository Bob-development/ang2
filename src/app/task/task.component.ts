import { Component, Input } from '@angular/core';
import { TasksService } from "../services";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() toDoTask: {date: string, description: string, id: number};

  public tasks = this.taskService.getTasks();

  public isEditStyles: boolean = false;
  public isInputsDisabled: boolean = true;
  public editBtnTextContent: string = 'Click To Edit';

  constructor(
    public taskService: TasksService
  ){}

  editTask(){
    if(this.isInputsDisabled){
      this.isInputsDisabled = !this.isInputsDisabled;
      this.isEditStyles = !this.isEditStyles;
      this.editBtnTextContent = 'Edit'
    } else {
      this.taskService.editTask(this.toDoTask.id, this.toDoTask);

      this.isInputsDisabled = !this.isInputsDisabled;
      this.isEditStyles = !this.isEditStyles;
      this.editBtnTextContent = 'Click To Edit'
    }
  }

  deleteTask(){
    return this.taskService.deleteTask(this.toDoTask.id);
  }
}
