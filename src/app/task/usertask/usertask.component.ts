import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './usertask.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usertask',
  templateUrl: './usertask.component.html',
  styleUrl: './usertask.component.css',
})
export class UsertaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
