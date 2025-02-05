import { Component } from '@angular/core';
import { TaskComponent } from '../task.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  

}
