import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MobxAngularModule } from "mobx-angular";
import { TaskItemModule } from './task-item/task-item.module';
import { Routes, RouterModule } from '@angular/router';
//import { TaskItemComponent } from './task-item/task-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{
  path: '',
  component: TasksComponent
}]

@NgModule({
  imports: [
    MobxAngularModule,
    CommonModule,
    TaskItemModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TasksComponent,
    HeaderComponent,
    FooterComponent
  ]
  //  providers: [TodosService],,
 // exports: [
 //   TasksComponent
// ]
})
export class TasksModule { }
