import { Component, OnInit } from '@angular/core';
import { RuneService } from '../rune.service';
import { RunesComponent } from '../runes/runes.component';
import {Rune} from '../rune'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-runes-search',
  templateUrl: './runes-search.component.html',
  styleUrls: ['./runes-search.component.scss']
})
export class RunesSearchComponent{

  runes: Rune[];

  value: string[];
  names: string[] = ["a","b"];
  model: Rune = {"id": 1,"name": this.names[0], "value": "value", "translation": "translation", "rune": "rune", "alphaId": 1};
  runic: string[];
  submitted = false;
  


  constructor(private runeService: RuneService){
    this.runeService.getRunes().subscribe(runes => this.runes = runes);
    this.runeService.getRune(1).subscribe(rune => this.model = rune);
    

  }
  
  getRunes(): void{

  
    this.runes.forEach(function(rune){


      this.value.push(rune.value);
      this.names.push(rune.name);
      this.runic.push(rune.rune);
      console.log(this.names);

    });

  }

  onSubmit(){this.submitted = true;}
  



}
