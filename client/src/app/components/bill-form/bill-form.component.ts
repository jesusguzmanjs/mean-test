import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {
  public price: number | undefined;
  public date: number | undefined;
  public time: number | undefined;
  public consumption: number | undefined;
  public pricePerHour: number | undefined;
  public validated: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  parseData(data: any) {
    this.price = data.price
    this.date = data.date
    this.time = data.time
    this.consumption = data.consumption
    this.pricePerHour = data.pricePerHour
  }

  validate(): boolean{
    const form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      this.validated = true
      return true
    }
    this.validated = false
    return false
  }

}
