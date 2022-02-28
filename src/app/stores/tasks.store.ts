import { Injectable } from '@angular/core';
//import {action, computed, makeObservable} from "mobx";
import { observable, action, computed } from 'mobx-angular';
import { Task } from 'src/app/shared/models/task';

@Injectable(
  {providedIn: 'root'}
)
export class TasksStore {
  @observable items: Task[] = [];

  constructor() {
    //  makeObservable(this); // don't forget to add this if the class has observable fields
  }

  @action addTask(task: Task) {
    this.items.push(task);
  }

  @computed get getTasks() {
  //  return this.items.filter(i => !i.completed);
    return this.items;
  }

  // observable data
  /*
  private @observable.shallow items = [];
  private @observable selectedTaskId: guid;

  // computed data
  @computed get activeTasks() {
    return this.items.filter(i => !i.completed);
  }
  @computed get selectedTask() {
    return this.items.find(i => i.id = this.selectedTaskId);
  }
  constructor() {
    makeObservable(this); // don't forget to add this if the class has observable fields
  }
  // actions
  @action addTask(task: Task) {
    this.items.push(task);
  }
  @action selectTask(id: guid) {
    this.selectedTaskId = id;
  }*/
}
