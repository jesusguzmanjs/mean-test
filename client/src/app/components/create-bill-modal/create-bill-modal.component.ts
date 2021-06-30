import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BillFormComponent} from "../bill-form/bill-form.component";
import {MainService} from "../../services/main";


@Component({
  selector: 'app-create-bill-modal',
  templateUrl: './create-bill-modal.component.html',
  styleUrls: ['./create-bill-modal.component.css']
})
export class CreateBillModalComponent implements OnInit {
  @ViewChild(BillFormComponent) billFormComponent: BillFormComponent | undefined;
  constructor(public activeModal: NgbActiveModal, public mainService: MainService) { }

  ngOnInit(): void {
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

      this.mainService.createBill(data).subscribe((response) => {
        this.activeModal.close('success')
        console.log('success', response)
      }, (error) => {
        console.log('error', error)
        this.activeModal.close('error')
      })
    }

  }

}
