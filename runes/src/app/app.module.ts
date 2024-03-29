import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunesComponent } from './runes/runes.component';
import { RunesDetailComponent } from './runes-detail/runes-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunePipePipe } from './rune-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesChildComponent } from './sentences-child/sentences-child.component';
import { RunesSearchComponent } from './runes-search/runes-search.component';


@NgModule({
  declarations: [
    AppComponent,
    RunesComponent,
    RunesDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RunePipePipe,
    SentencesComponent,
    SentencesChildComponent,
    RunesSearchComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
