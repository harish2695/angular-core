import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component-interaction',
  templateUrl: './parent-component-interaction.component.html',
  styleUrls: ['./parent-component-interaction.component.css']
})
export class ParentComponentInteractionComponent implements OnInit {

  @Input('parentName') public name;
  constructor() { }

  ngOnInit() {
  }

}
