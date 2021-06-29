import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainService} from './services/main';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateBillModalComponent } from './components/update-bill-modal/update-bill-modal.component';
import { BillFormComponent } from './components/bill-form/bill-form.component';
import { CrateBillModalComponent } from './components/crate-bill-modal/crate-bill-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateBillModalComponent,
    BillFormComponent,
    CrateBillModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
