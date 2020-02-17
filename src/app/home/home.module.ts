import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    LayoutModule,
    CommonModule,
  ]
})
export class HomeModule { }
