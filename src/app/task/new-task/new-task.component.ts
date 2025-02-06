import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummmary = '';
  enteredDate = '';

  constructor(private taskService: TaskService) {}

  cancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummmary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
