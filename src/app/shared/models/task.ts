import { action, computed, makeObservable, observable } from 'mobx';
import { inject } from '@angular/core';
//import { ListsStore } from 'src/app/stores/lists.store';
//import { Model } from '../../core/decorators/model.decorator';
import { id } from '../../core/types/id.type';
import { BaseModel } from '../../core/base/base-model';
//import { TaskData } from '../interfaces/taskData';
//import { List } from './list';
//import { getGUID } from '../../core/functions/guid';

export class Task {
  @observable id!: id;
  @observable title!: string;
  @observable completed = false;

 constructor( title: string){
   this.id = this.getGUID();
 }

 //TODO replace https://www.npmjs.com/package/uid-safe
 getGUID() {
  //let counter = 1;
  //return () => counter++;
  //npm install uuid
  let guid  = 0;
  guid = Math.floor(Math.random() * 100)
  return guid;
}

  setFromJSON(value: any): void {
    throw new Error('Method not implemented.');
  }
  getJSON() {
    throw new Error('Method not implemented.');
  }
}



/*
@Model({ factory: () => new Task(inject(ListsStore)) })
export class Task extends BaseModel {
  @observable id!: id;
  @observable title!: string;
  @observable listId!: id;
  @observable completed = false;

  @computed get list(): List | undefined {
    if (!this.listId) {
      return undefined;
    }
    return this.listsStore.getItemById(this.listId);
  }

  constructor(private listsStore: ListsStore) {
    super();
    makeObservable(this);
  }

  @action setTitle(value: string) {
    this.title = value;
  }

  @action setCompleted(value: boolean) {
    this.completed = value;
  }

  @action setFromJSON(task: TaskData) {
    Object.assign(this, task);
  }

  getJSON(): TaskData {
    return {
      id: this.id,
      title: this.title,
      listId: this.listId,
      completed: this.completed,
    };
  }
}
*/
