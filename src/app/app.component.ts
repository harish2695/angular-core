import { StudentService } from './student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:"<h1> Hello {{title}}</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  private sub:any;
  parentProperty = "The name is harish"

  userText:string = "Harish"

  public students = []

  constructor(private _studentervice: StudentService){
  }
  ngOnInit(){
  this.sub = this._studentervice.getStudents().subscribe(data => this.students = data)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
