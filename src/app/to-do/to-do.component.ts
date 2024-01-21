import { Component } from '@angular/core';
import { TasksService } from "../services";

import { Status } from "../../enum/Status";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  public statusToDo = Status.toDo;
  
  constructor(
    public taskService: TasksService
  ){}
}
