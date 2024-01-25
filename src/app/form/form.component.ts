import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('name') nameInput: ElementRef | undefined;
  @ViewChild('customer') customerInput: ElementRef | undefined;
  @ViewChild('description') descriptionInput: ElementRef | undefined;

  constructor(protected api:ApiService){}

  tasks: any[] = [];

  post_task(event: Event) {
    event.preventDefault();

    const nameValue = (<HTMLInputElement>document.getElementById('name')).value;
    const customerValue = (<HTMLInputElement>document.getElementById('customer')).value;
    const descriptionValue = (<HTMLInputElement>document.getElementById('description')).value;
    let body = {
      name: nameValue,
      customer: customerValue,
      description: descriptionValue
    };

    this.api.post(body)
      .then(res => {
        console.log(res)
        if (window.confirm('Task imported sucessfully')) {
        }
      })
      .catch(error =>{
        console.error(error)
        alert('Error')
      } );
  }


}
