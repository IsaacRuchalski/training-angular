import { Component, ViewChild } from '@angular/core';
import { SentencesChildComponent } from '../sentences-child/sentences-child.component';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent {

@ViewChild(SentencesChildComponent) childView: SentencesChildComponent;



search: string;

constructor() {
  //this.reset();
}

}
