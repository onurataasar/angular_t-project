import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareComponent } from './square/square.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, SquareComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
