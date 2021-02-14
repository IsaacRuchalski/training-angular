import { Component, OnInit, Input } from '@angular/core';
import { Rune } from '../rune';
import { Location } from '@angular/common';
import { RuneService } from '../rune.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-runes-detail',
  templateUrl: './runes-detail.component.html',
  styleUrls: ['./runes-detail.component.scss']
})
export class RunesDetailComponent implements OnInit {

  @Input() rune: Rune;
  constructor(private route: ActivatedRoute,
    private runeService: RuneService,
    private location: Location) { 
      
    
  }
  ngOnInit(): void {
    this.getRune();
  }

  getRune(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.runeService.getRune(id)
      .subscribe(rune => this.rune = rune);
  }

  goBack(): void {
    this.location.back();
  }

}
