import {Component} from "@angular/core";
import {CardComponent} from "./../card/card.component";

@Component({
    selector: "main-page",
    templateUrl: 'components/main/main.html',
    styleUrls: ['components/main/main.css'],
    directives: [CardComponent]
})

export class MainComponent {

}
