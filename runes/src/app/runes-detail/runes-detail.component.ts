import { Component, OnInit, Input } from '@angular/core';
import { Rune } from '../rune';
@Component({
  selector: 'app-runes-detail',
  templateUrl: './runes-detail.component.html',
  styleUrls: ['./runes-detail.component.scss']
})
export class RunesDetailComponent implements OnInit {

  @Input() rune: Rune;
  constructor() { }

  ngOnInit(): void {
  }

}
