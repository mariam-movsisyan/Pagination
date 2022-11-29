import { Component, Input } from "@angular/core";
import { IUser } from "src/app/Models";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
    @Input() public users!: IUser;
    
}