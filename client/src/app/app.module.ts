import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainService} from './services/main';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AgGridModule,
        NgbModule
    ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
