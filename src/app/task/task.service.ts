import { Injectable } from '@angular/core';
import { Form } from './usertask/usertask.model';

@Injectable({ providedIn: 'root' })


export class TaskService {

  constructor(){
   
    const Tasks= localStorage.getItem('Tasks');
    if(Tasks){
      this.Tasks=JSON.parse(Tasks);
    }
  
  }
  private Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u6',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.Tasks.filter((tasks) => tasks.userId === userId);
  }

  addTask(taskData: Form, userId: string) {
    this.Tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('Tasks',JSON.stringify(this.Tasks));
  }
}
