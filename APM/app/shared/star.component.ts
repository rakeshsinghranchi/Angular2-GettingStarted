import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'ai-star',
    styleUrls:['app/shared/star.component.css'],
    templateUrl:'app/shared/star.component.html'
})
export class StarComponent implements OnChanges{
    
    ngOnChanges(changes: SimpleChanges): void {
        this.startWidth = this.rating *86/5;
    }

   @Input() rating:number;
    startWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

}