import { IStudent } from './studentlist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  getStudents():IStudent[]{
    return [
      {id:"101",name:"harish",gender:"male",dateOfBirth:"02/06/1995"},
      {id:"102",name:"ramesh",gender:"male",dateOfBirth:"18/06/1999"},
      {id:"103",name:"suresh",gender:"male",dateOfBirth:"30/05/1936"},
      {id:"103",name:"Deve gowda",gender:"male",dateOfBirth:"18/05/1936"}
  ]
  }
  constructor() { }
}
