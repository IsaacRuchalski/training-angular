import { Injectable } from '@angular/core';
import { Rune } from './rune';
import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RuneService {
  private url = "https://immense-reaches-27541.herokuapp.com/runes";
  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getRunes(): Observable<Rune[]>{
  this.messagesService.add('RuneService: fetched runes');
  return this.http.get<Rune[]>(this.url)

  }

  getRune(id: number): Observable<Rune> {
    // TODO: send the message _after_ fetching the rune
    this.messagesService.add(`RuneService: fetched rune id=${id}`);
    return this.http.get<Rune>("https://immense-reaches-27541.herokuapp.com/runes/"+id);
  }

  getAlphabet(alphabet: number): Observable<Rune[]> {
    // TODO: send the message _after_ fetching the rune
    this.messagesService.add(`RuneService: fetched alphabet alphabetsId=${alphabet}`);
    console.log("https://immense-reaches-27541.herokuapp.com/alpha/"+alphabet+"/runes");
    return this.http.get<Rune[]>("https://immense-reaches-27541.herokuapp.com/alpha/"+alphabet+"/runes");
  }
}
