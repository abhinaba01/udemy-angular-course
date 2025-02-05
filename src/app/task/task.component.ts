import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { UsertaskComponent } from "./usertask/usertask.component";
import { TASKS_LIST } from './tasks';
import { Task } from './usertask/usertask.model';
import { NewTaskComponent } from './new-task/new-task.component';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UsertaskComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  Tasks=TASKS_LIST;
  @Input() name?: string | undefined;
  @Input({required:true}) id!: string;
  @Output() newTask= new EventEmitter();
  isAddingTask=false;

  onCompleteTask(id:string){
    this.Tasks=this.Tasks.filter((task) => task.id !==id);

  }
  get selectedUserTasks(){
    console.log(this.Tasks.filter((task)=> task.userId===this.id));
  
    return this.Tasks.filter((task)=> task.userId===this.id);
  }

  addTask(){
    this.isAddingTask=true;
  }

  
  
    
    
  }

