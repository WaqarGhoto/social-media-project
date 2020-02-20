import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'facebookDemo';

}
