import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {action, computed, makeObservable, observable} from "mobx";

import {id} from "../../../core/types/id.type";
//import { ListsStore } from 'src/app/stores/lists.store';
import { Task } from 'src/app/shared/models/task';
import {TasksStore} from "../../../stores/tasks.store";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @observable newTaskTitle = '';

 // @ViewChild('taskfield') taskfield!: ElementRef;


  /*
  @computed get activeList(): List | undefined {
    return this.listsStore.activeList;
  }

  @computed get isListSelected(): boolean {
    return this.activeList !== undefined;
  }
 constructor(private listsStore: ListsStore) {
   */

  constructor(public taskStore: TasksStore) {
        makeObservable(this); // don't forget add this if a class has an observable field
  }


  @action setNewTaskTitle(value: string) {
    this.newTaskTitle = value;
  }

  handleNewTaskTitleInput({ target }: Event) {
    this.setNewTaskTitle((target as HTMLInputElement).value);
  }


  @HostListener('keydown.enter', ['$event'])
  @action handleNewTask(){

    let taskTitle = this.newTaskTitle;
    //this.taskfield.nativeElement.value;
    console.log(this.newTaskTitle);

    if (taskTitle.trim().length === 0)  return;

      let newTask = new Task(taskTitle);
      this.taskStore.addTask(newTask);

      this.setNewTaskTitle('');

      console.log(newTask);
      console.log('Add task : '+newTask);


       // this.taskfield.nativeElement.value = '';


//alert('Task '+this.taskfield.nativeElement.value);
  }

  removeTask(taskId: id) {
  //  this.taskStore.delete(taskId);
  }


/*
  @computed get activeList(): List | undefined {
    return this.listsStore.activeList;
  }
*/

/*
  ngOnInit(): void {
  }*/

}
