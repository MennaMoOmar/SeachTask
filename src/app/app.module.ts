import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TitleComponent } from './components/title/title.component';

import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
