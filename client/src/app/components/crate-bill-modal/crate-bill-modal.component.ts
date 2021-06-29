import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BillFormComponent} from "../bill-form/bill-form.component";
@Component({
  selector: 'app-crate-bill-modal',
  templateUrl: './crate-bill-modal.component.html',
  styleUrls: ['./crate-bill-modal.component.css']
})
export class CrateBillModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
