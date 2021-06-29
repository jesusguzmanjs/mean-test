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


  constructor() { }

  ngOnInit(): void {
  }

  parseDate(data: any) {
    console.log('EN EL PARSE', data)
    this.price = data.price
    this.date = data.date
    this.time = data.time
    this.consumption = data.consumption
    this.pricePerHour = data.pricePerHour
  }

}
