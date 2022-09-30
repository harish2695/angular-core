import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public studentId;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //
    // let id1 = parseInt(this.route.snapshot.paramMap.get('id'))
    let id1 = this.route.paramMap.subscribe((params:ParamMap) => {
      this.studentId = parseInt(params.get('id'))
    })
  }

  goNext(){
    this.router.navigate(['/students',this.studentId + 1])
  }
  goPrevious(){
    this.router.navigate(['/students',this.studentId -1])
  }

}
