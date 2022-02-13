import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { DateCountPipe } from './date-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    DateCountPipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
