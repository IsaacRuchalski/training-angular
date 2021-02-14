import { Component } from '@angular/core';
import { MonservService } from './monserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [MonservService]
})
export class AppComponent {
  title: string;

  constructor(private _monservService: MonservService){

this.title = _monservService.get();

  }
}
