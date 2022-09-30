import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public channel: string = "Tech with harish gowda"
  public  names:string[] = ["Harish","Ramesh","Suresh","Aneesh"]


  public switch:boolean = true; 

  public fruit = "banana"

  currentData = new Date()

  constructor() { }

  ngOnInit() {
  }

  public getDate(data){
    return moment(data).format('LLL')
  }

  public onClick(){
    this.fruit = ""
  }

  toggleSwitch(){
    this.switch = !this.switch
  }

}
