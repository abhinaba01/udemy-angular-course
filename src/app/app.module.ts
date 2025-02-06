import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './shared/card/card.component';
import { UsertaskComponent } from './task/usertask/usertask.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    CardComponent,
    UsertaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent], // specifies the root component
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
