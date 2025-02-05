import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { UsertaskComponent } from "./usertask/usertask.component";
import { TASKS_LIST } from './tasks';
import { Task ,Form} from './usertask/usertask.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';


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

  constructor(private taskService:TaskService){

  }

  isAddingTask=false;

  onCompleteTask(id:string){
    this.Tasks=this.Tasks.filter((task) => task.id !==id);

  }
  get selectedUserTasks(){
    return this.Tasks.filter((task)=> task.userId===this.id);
  }

  addTask(){
    this.isAddingTask=true;
  }

  onCancelTask(){
    this.isAddingTask=false;
  }

  onAddTask(form:Form)
  {
    this.Tasks.push({
      id: new Date().getTime().toString(),
      userId:this.id,
      title:form.title,
      summary:form.summary,
      dueDate:form.date
    })
    this.isAddingTask=false
  }

}

