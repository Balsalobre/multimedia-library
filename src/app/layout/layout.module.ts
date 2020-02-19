import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from '../shared/grid/grid.component';
import { CardInfoComponent } from '../shared/card-info/card-info.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterListComponent } from '../shared/filter-list/filter-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent,
    GridComponent,
    CardInfoComponent,
    FilterListComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
