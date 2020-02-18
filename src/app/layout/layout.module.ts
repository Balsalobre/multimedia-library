import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from '../shared/grid/grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
