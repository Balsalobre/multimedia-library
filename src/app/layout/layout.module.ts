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
import { ModalFormComponent } from '../shared/modal-form/modal-form.component';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { CardlinkDirective } from '../shared/directives/cardlink.directive';
defineLocale('es', esLocale);

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    LayoutComponent,
    GridComponent,
    CardInfoComponent,
    FilterListComponent,
    ModalFormComponent,
    SearchPipe,
    CardlinkDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  exports: [
    LayoutComponent,
  ],
  entryComponents: [
    ModalFormComponent,
  ],
})
export class LayoutModule {
  constructor( private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es');
 }
}
