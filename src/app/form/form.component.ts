import { Component } from '@angular/core';
import { TasksService } from "../services";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(
    public taskService: TasksService
  ){}

  public taskDescr: string = '';

  private idCounter: number = 0;

  sendTask(){
    const task = {
      date: new Date(),
      description: this.taskDescr,
      id: this.idCounter
    }

    this.taskService.addTask(task);

    this.idCounter += 1;
  }
}
