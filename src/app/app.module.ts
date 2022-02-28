import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/forms';
//import { ModalModule } from 'ngx-bootstrap/modal';
//import { CustomFormsModule } from 'ng2-validation'
import { MobxAngularModule } from 'mobx-angular';

import {TasksModule} from "./views/tasks/tasks.module";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MobxAngularModule,
    AppRoutingModule,
    BrowserModule,
    //,
    //ListsModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
