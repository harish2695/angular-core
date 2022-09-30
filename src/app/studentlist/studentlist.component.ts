import { StudentlistService } from './studentlist.service';
import { Component, OnInit } from '@angular/core';
import { IStudent } from './studentlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers :[StudentlistService] //regestering the service
})
export class StudentlistComponent implements OnInit {

  students: IStudent[];

  constructor(private _studentlistService:StudentlistService, private router:Router) {
    this.students = this._studentlistService.getStudents();
   }

  ngOnInit() {
  }

  onSelect(student){
    this.router.navigate(['/students',student.id])
  }
}
