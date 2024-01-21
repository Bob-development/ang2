import { Component } from '@angular/core';
import { TasksService } from "../services";
import { OnInit } from '@angular/core';

//UTILS
import { Status } from "../../enum/Status";
import { date } from "../../utils/getDate";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  public taskDescr: string = '';
  public optionValue: string;
  public statusData: string[] = [Status.toDo, Status.inProgress, Status.done];

  private idCounter: number = 0;

  constructor(
    public taskService: TasksService
  ){}

  ngOnInit(): void {

  }


  sendTask(){
    const task = this.taskService.createTask(date(), this.taskDescr, this.idCounter, this.optionValue);

    this.taskService.addTask(task);

    this.idCounter += 1;
  }
}
