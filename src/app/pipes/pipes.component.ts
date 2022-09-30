import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public value:string = "Techie harish gowda"

  public dob: string = '02/06/1995 '

  public amount:string = "233.344"

  public percentage:string = "0.2567"
  constructor() { }

  ngOnInit() {
  }

}
