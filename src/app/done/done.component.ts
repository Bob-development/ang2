import { Component } from '@angular/core';
import { TasksService } from "../services";

import { Status } from "../../enum/Status";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.css'
})
export class DoneComponent {
  public statusDone = Status.done;
  
  constructor(
    public taskService: TasksService
  ){}
}
