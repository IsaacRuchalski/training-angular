import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, DoCheck, Input } from '@angular/core';
import { SENTENCES } from '../mock-sentences'
import { Sentence } from '../sentence'

@Component({
  selector: 'app-sentences-child',
  templateUrl: './sentences-child.component.html',
  styleUrls: ['./sentences-child.component.scss']
})
export class SentencesChildComponent implements DoCheck {

  sentences: Sentence[] = SENTENCES;
  changeDetected = false;
  oldSearch = "";
  countanswers: number;
  answers: Sentence[] = [/*{id:null,base:"",translation:""}*/];

  
  @Input() search: string;

  ngDoCheck() {

    this.answers = [];
    console.log("on passe");
    this.changeDetected = false;
    if (this.search !== this.oldSearch) {
      this.changeDetected = true;
      this.oldSearch = this.search;

      console.log(this.search);


    }

    var search2 = this.search;
    var answers2 = this.answers;
    SENTENCES.forEach(function(sentence){

      if(sentence.base.toLowerCase().includes(search2.toLowerCase())){
        
          answers2.push(sentence);    
   
      }        

    });

    console.log(answers2);

    this.answers = answers2;
    this.countanswers = this.answers.length;
    console.log(this.changeDetected);

    
}

}
