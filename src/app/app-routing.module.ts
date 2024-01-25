import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FormComponent } from './form/form.component';
import { TimeComponent } from './time/time.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'form', component: FormComponent },
  { path: 'time', component: TimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations:[TasksComponent, TimeComponent]
})
export class AppRoutingModule {

 }
