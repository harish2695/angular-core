import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component
({
    selector:"simple-component",
    template:"You have entered : {{simpleInput}}"

})
export class SimpleComponent implements OnChanges{

    @Input() simpleInput:string;  

    ngOnChanges(changes: SimpleChanges){
        for(let propertyName in changes){
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue)
            let previos = JSON.stringify(change.previousValue)

            console.log(propertyName + ": currentValue= "+ current + ',previousValue = '+previos)
        }
    }
}