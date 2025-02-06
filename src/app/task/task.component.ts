import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsertaskComponent } from './usertask/usertask.component';
import { TASKS_LIST } from './tasks';
import { Task, Form } from './usertask/usertask.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UsertaskComponent, NewTaskComponent],
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
