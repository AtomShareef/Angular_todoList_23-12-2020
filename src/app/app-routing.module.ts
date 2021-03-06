import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path : '', component: TodosComponent}, //Adding router at last
  { path : 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
