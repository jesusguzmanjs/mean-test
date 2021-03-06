import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BillFormComponent} from "../bill-form/bill-form.component";
import {MainService} from "../../services/main";

@Component({
  selector: 'app-modal',
  templateUrl: './update-bill-modal.component.html',
  styleUrls: ['./update-bill-modal.component.css']
})
export class UpdateBillModalComponent implements AfterViewInit {
  @Input() public billData: any;
  @ViewChild(BillFormComponent) billFormComponent: BillFormComponent | undefined;
  billId: string = '';
  constructor(public activeModal: NgbActiveModal, public mainService: MainService) { }

  ngAfterViewInit(): void {
    this.billId = this.billData._id
    this.billFormComponent?.parseData(this.billData)
  }

  save() {
    if (this.billFormComponent?.validate()) {
      const data = {
        price: this.billFormComponent?.price,
        date: this.billFormComponent?.date,
        time: this.billFormComponent?.time,
        consumption: this.billFormComponent?.consumption,
        pricePerHour: this.billFormComponent?.pricePerHour
      }

      this.mainService.updateBill(this.billId, data).subscribe((response) => {
        this.activeModal.close('success')
        console.log('success', response)
      }, (error) => {
        console.log('error', error)
        this.activeModal.close('error')
      })
    }

  }

}
