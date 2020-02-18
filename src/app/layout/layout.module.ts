import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from '../shared/grid/grid.component';
import { CardInfoComponent } from '../shared/card-info/card-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent,
    GridComponent,
    CardInfoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
