import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { UserComponent } from "./user/user.component";
import { USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users= USERS;
  selectedUserId!:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
