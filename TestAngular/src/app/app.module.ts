import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    StudentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
