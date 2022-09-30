import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolations',
  templateUrl: './interpolations.component.html',
  styleUrls: ['./interpolations.component.css']
})
export class InterpolationsComponent implements OnInit {

name: string = "Welcome to angular Harish"
  message:string ;
  constructor() { }

  applyBoldStyle: boolean = true
  applyColorClass:boolean = true

  ngOnInit() {
  }

  public welcomeMessage(){
    return "Dear user " + this.name
  }
  
  public onClick(value){
    console.log("HHHH CLICKED ",value)
    this.message = "WELCOME TO ANGULAR"
  }
  // applying multiple class
  addStyleClasses(){
    var classes ={
      applyBoldStyle:this.applyBoldStyle,
      applyColorClass:this.applyColorClass,
    }
    return classes;
  }

}
