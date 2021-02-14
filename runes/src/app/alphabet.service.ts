import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alphabet } from './alphabet';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  
  getAlphabet(alphabet: number): Observable<Alphabet> {
    // TODO: send the message _after_ fetching the rune
    this.messagesService.add(`alphabetService: fetched alphabet alphabetsId=${alphabet}`);
    
    return this.http.get<Alphabet>("https://immense-reaches-27541.herokuapp.com/alpha/"+alphabet);
  }
}
