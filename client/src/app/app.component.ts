import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MainService} from './services/main';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {UpdateBillModalComponent} from './components/update-bill-modal/update-bill-modal.component';
import {CreateBillModalComponent} from "./components/create-bill-modal/create-bill-modal.component";
import {ToastService} from "./services/toast-service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  form: FormGroup;
  public columnDefs = [
    {
      headerName: 'Fecha',
      field: 'date',
      filter: false,
      valueFormatter: (params: any) => !params.value ? null : moment(params.value).format('DD/MM/YY'),
      width: '150px',
      checkboxSelection: true,
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
  public rowData = [];
  public gridApi: any;
  public gridOptions: any;
  public file: any;

  constructor(
      public fb: FormBuilder,
      public mainService: MainService,
      private modalService: NgbModal,
      private toastService: ToastService
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
      pagination: true
    };
    this.form = this.fb.group({
      csv: [null]
    })
  }

  onGridReady({ api }: any): void {
    this.gridApi = api;
    this.loadData()
  }

  showSuccessToast(message: string) {
    this.toastService.show(message, { classname: 'bg-success text-light', delay: 3000 })
  }

  showErrorToast(message: string) {
    this.toastService.show(message, { classname: 'bg-danger text-light', delay: 3000 })
  }

  deleteBills(): void {
    const ids = this.gridApi.getSelectedRows().map((data: any) => data._id)
    this.mainService.deleteBills(ids).subscribe((resp: any) => {
      this.showSuccessToast('Eliminados con exito')
      this.loadData()
    }, (error) => {
      this.showErrorToast('Ha ocurrido un error eliminando')
    })
  }

  onRowDoubleClicked(ev: any) {
    const modalRef = this.modalService.open(UpdateBillModalComponent, {size: 'lg', centered: true})
    modalRef.componentInstance.billData = ev.data;
    modalRef.closed.subscribe((result) => {
      if (result === 'success') {
        this.showSuccessToast('Guardado con exito')
        this.loadData()
      } else if (result === 'error') {
        this.showErrorToast('Ha ocurrido un error guardando')
      }
    })
  }

  openCreateBillModal() {
    const modalRef = this.modalService.open(CreateBillModalComponent, {size: 'lg', centered: true})
    modalRef.closed.subscribe((result) => {
      if (result === 'success') {
        this.showSuccessToast('Creado con exito')
        this.loadData()
      } else if (result === 'error')  {
        this.showErrorToast('Ha ocurrido un error creando')
      }
    })
  }

  async loadData() {
    this.mainService.getData().subscribe(
        (response: any) => {
          this.rowData = response;
        },
        () => {
          this.showErrorToast('Ha ocurrido un error cargando los datos')
        }
    )
  }

  upload(event: any) {
    // @ts-ignore
    this.file = (event.target as HTMLInputElement).files[0];
    console.log('el file', this.file)
    this.form.patchValue({
      csv: this.file
    });
  }

  submit() {
    const formData: any = new FormData();
    formData.append("csv", this.form.get('csv')?.value);
    this.mainService.uploadCSV(formData).subscribe(
        (response) => {
          this.showSuccessToast('Archivo subido con exito')
        },
        (error) => {
          this.showErrorToast('Ha ocurrido un error subiendo el archivo')
        }
    )
  }

}
