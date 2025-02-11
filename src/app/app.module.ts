import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './modules/password/password.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        PasswordComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
