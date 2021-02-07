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

runes: Rune[];
selectedRune: Rune;
  constructor(private runeService: RuneService , private messagesService: MessagesService) { }

  ngOnInit(): void {

    this.getRunes();

  }

  onSelect(rune: Rune): void{

    this.selectedRune = rune;
    //this.messagesService.clear();
    this.messagesService.add(`RunesComponent: Selected rune id=${rune.id}`);
  }

  getRunes(): void {

    this.runeService.getRunes().subscribe(runes => this.runes = runes);

  }
}
