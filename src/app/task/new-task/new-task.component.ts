import { Component,EventEmitter,Output } from '@angular/core';
import { TaskComponent } from '../task.component';
import { FormsModule } from '@angular/forms';
import { Form } from '../usertask/usertask.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel=new EventEmitter<void>();
  @Output() add= new EventEmitter<Form>()
  enteredTitle= '';
  enteredSummmary= '';
  enteredDate='';

  cancelTask(){
    this.cancel.emit()
  }

  onSubmit()
  {
    this.add.emit(
    {
      title:this.enteredTitle,
      summary:this.enteredSummmary,
      date:this.enteredDate,
    });
  }


}
