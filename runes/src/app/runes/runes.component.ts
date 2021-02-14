import { Component, OnInit } from '@angular/core';
import { Rune } from '../rune';
import { RuneService } from '../rune.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

runesYounger: Rune[];
runesElder: Rune[];
selectedRune: Rune;
  constructor(private runeService: RuneService , private messagesService: MessagesService) { }

  ngOnInit(): void {

    this.getRunesYounger();
    this.getRunesElder();
  }

  onSelect(rune: Rune): void{

    this.selectedRune = rune;
    //this.messagesService.clear();
    this.messagesService.add(`RunesComponent: Selected rune id=${rune.alphaId}`);
  }

  getRunesYounger(): void {

    this.runeService.getAlphabet(1).subscribe(runesYounger => this.runesYounger = runesYounger);
    
  }

  getRunesElder(): void {

    this.runeService.getAlphabet(2).subscribe(runesElder => this.runesElder = runesElder);

  }
}
