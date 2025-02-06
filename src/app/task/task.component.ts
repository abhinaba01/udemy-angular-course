import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASKS_LIST } from './tasks';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  Tasks = TASKS_LIST;

  @Input() name?: string | undefined;
  @Input({ required: true }) id!: string;
  @Output() newTask = new EventEmitter();
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancelTask() {
    this.isAddingTask = false;
  }
}
