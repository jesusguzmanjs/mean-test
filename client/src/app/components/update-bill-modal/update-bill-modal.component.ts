import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BillFormComponent} from "../bill-form/bill-form.component";

@Component({
  selector: 'app-modal',
  templateUrl: './update-bill-modal.component.html',
  styleUrls: ['./update-bill-modal.component.css']
})
export class UpdateBillModalComponent implements AfterViewInit {
  @Input() public billData: any;
  @ViewChild(BillFormComponent) billFormComponent: BillFormComponent | undefined;
  constructor(public activeModal: NgbActiveModal) { }

  ngAfterViewInit(): void {
    console.log('el bill data', this.billData, this.billFormComponent)
    this.billFormComponent?.parseDate(this.billData)
  }

}
