import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public async get(){
    let res = await fetch('https://oficines.glamsw.com/chrono-test/tasks',{
      headers:{
        'x-access-token': '3GBWKoIHxXrI43r3hF0aVRC80IP1Q44rVr0w0O5Ikm0wUQdJcTbX60X1QBXorIjs'
      }
    })
    return res.json();
  }

  public async post(body:any){
    console.log(body)
    let res = await fetch('https://oficines.glamsw.com/chrono-test/tasks',{
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'x-access-token': '3GBWKoIHxXrI43r3hF0aVRC80IP1Q44rVr0w0O5Ikm0wUQdJcTbX60X1QBXorIjs',
        'Content-Type': 'application/json'
      }
    })
    console.log(res)
    return res.json();
  }

  public async getTime(taskId:string){
    const url = 'https://oficines.glamsw.com/chrono-test/tasks/';
    let res = await fetch(url + taskId + '/times',{
      headers:{
        'x-access-token': '3GBWKoIHxXrI43r3hF0aVRC80IP1Q44rVr0w0O5Ikm0wUQdJcTbX60X1QBXorIjs'
      }
    })
    return res.json();
  }

  public async editTime(taskId:string, body:any){
    const url = 'https://oficines.glamsw.com/chrono-test/tasks/';
    let res = await fetch(url + taskId,{
      method: 'PUT',
      body: JSON.stringify(body),
      headers:{
        'x-access-token': '3GBWKoIHxXrI43r3hF0aVRC80IP1Q44rVr0w0O5Ikm0wUQdJcTbX60X1QBXorIjs'
      }
    })
    return res.json();
  }

}
