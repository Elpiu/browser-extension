import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeCardComponent } from './components/me-card/me-card.component';
import { FaqComponent } from './components/faq/faq.component';
import { IntroComponent } from './components/intro/intro.component';
import { PasswordCreatorComponent } from './components/password-creator/password-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    MeCardComponent,
    FaqComponent,
    IntroComponent,
    PasswordCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
