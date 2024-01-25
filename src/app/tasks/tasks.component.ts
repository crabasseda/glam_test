import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(protected api:ApiService){

  }
  tasks: any[] = [];
  async ngOnInit(){
    try{
      let tasksData = await this.api.get()
      console.log(tasksData)
      this.tasks = Object.keys(tasksData).map(key => tasksData[key]);
    }catch(e){
      throw new Error('not possible to get the tasks')
    }
  
  }
}
