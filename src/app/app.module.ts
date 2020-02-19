import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { SortDatePipe } from './shared/pipes/sort-date.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { TypePipe } from './shared/pipes/type.pipe';
import { HasImagePipe } from './shared/pipes/has-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SortDatePipe,
    SortPipe,
    TypePipe,
    HasImagePipe,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    SortDatePipe,
    SortPipe,
    TypePipe,
    HasImagePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
