import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MainService} from './services/main';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {UpdateBillModalComponent} from './components/update-bill-modal/update-bill-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  form: FormGroup;
  public columnDefs = [
    {
      headerName: 'Fecha',
      field: 'date',
      filter: false,
      valueFormatter: (params: any) => !params.value ? null : moment(params.value).format('DD/MM/YY'),
      width: '150px'
    },
    {
      headerName: 'Hora',
      field: 'time',
      width: '140px'
    },
    {
      headerName: 'Consumo (Wh)',
      field: 'consumption'
    },
    {
      headerName: 'Precio (€/kWh)',
      field: 'price'
    },
    {
      headerName: 'Coste por hora (€)',
      field: 'pricePerHour'
    }
  ];
  public rowData = [{
    pricePerHour: 1
  }];
  private gridApi: any;
  public gridOptions: any;

  constructor(
      public fb: FormBuilder,
      public mainService: MainService,
      private modalService: NgbModal
  ) {
    this.gridOptions = {
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
        menuTabs: ['filterMenuTab', 'generalMenuTab'],
        tooltipComponent: 'customTooltip',
        filterParams: { newRowsAction: 'keep', filterOptions: ['contains'], suppressAndOrCondition: true }
      },
      onRowDoubleClicked: (ev: any) => this.onRowDoubleClicked(ev),
      tooltipShowDelay: 0,
    };
    this.form = this.fb.group({
      csv: [null]
    })
  }

  onGridReady({ api, columnApi }: any): void {
    console.log('on grid ready')
    this.gridApi = api;
    this.loadData()
  }

  onRowDoubleClicked(ev: any) {
    const modalRef = this.modalService.open(UpdateBillModalComponent, {size: 'lg', centered: true})
    modalRef.componentInstance.billData = ev.data;
    console.log('en el double', ev)
  }

  async loadData() {
    /*this.mainService.getData().subscribe(
        (response) => {
          console.log('el response', response)
          // @ts-ignore
          this.rowData = response;
        },
        (error) => {
          console.log('el error', error)
        }
    )*/
  }

  upload(event: any) {
    console.log('el event', event)
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    console.log('el file', file)
    this.form.patchValue({
      csv: file
    });
    // @ts-ignore
    // this.form.get('csv').updateValueAndValidity()
  }

  submit() {
    console.log('en el submi', this.form, this.form.get('csv')?.value)
    const formData: any = new FormData();
    formData.append("csv", this.form.get('csv')?.value);
    this.mainService.uploadCSV(formData).subscribe(
        (response) => {
          console.log('el response', response)
        },
        (error) => {
          console.log('el error', error)
        }
    )
  }

  ngOnInit(): void {
  }
}
