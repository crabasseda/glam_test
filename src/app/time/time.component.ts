import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  @ViewChild('editTime') editTimeInput: ElementRef | undefined;
  constructor(protected api:ApiService){

  }
  tasksTime: any[] = [];
  selectedTask: any = '65b1f69ba4c149f185e02a7b';

  async ngOnInit(){
    try{
      //id hardcodejat d'exemple
      let tasksDataTime = await this.api.getTime('65b1f69ba4c149f185e02a7b')
      this.tasksTime = Object.keys(tasksDataTime).map(key => tasksDataTime[key]);

    }catch(e){
      throw new Error('not possible to get the tasks')
    }
  }

  selectTask(task: any) {
    this.selectedTask = task;
  }

  async editSpentTime(){
    const editTimeValue = (<HTMLInputElement>document.getElementById('editSpentTime')).value;

    let body = {
      payload: editTimeValue
    }

    try{ 
      let editedTask = await this.api.editTime('65b1f69ba4c149f185e02a7b', body)
      console.log(editedTask)

    }catch(e){
      throw new Error('not possible to get the tasks')
    }
  }

}
