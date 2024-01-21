import { Component } from '@angular/core';
import { TasksService } from "../services";

import { Status } from "../../enum/Status";

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.css'
})
export class InProgressComponent {
  public statusInProgress = Status.inProgress;
  
  constructor(
    public taskService: TasksService
  ){}


}
