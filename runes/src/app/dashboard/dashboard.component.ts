import { Component, OnInit } from '@angular/core';
import { Rune } from '../rune';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  runes: Rune[] = [];

  constructor(private runeService: RuneService) { }

  ngOnInit() {
    this.getRunes();
  }

  getRunes(): void {
    this.runeService.getRunes()
      .subscribe(runes => this.runes = runes.slice(1, 5));
  }
}