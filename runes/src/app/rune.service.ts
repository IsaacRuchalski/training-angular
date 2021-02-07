import { Injectable } from '@angular/core';
import { Rune } from './rune';
import { Observable, of } from 'rxjs';
import { RUNES } from './mock-runes';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class RuneService {

  constructor(private messagesService: MessagesService) { }

  getRunes(): Observable<Rune[]>{
  this.messagesService.add('RuneService: fetched runes');
  return of(RUNES);

  }
}
