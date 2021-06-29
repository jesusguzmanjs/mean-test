import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillModalComponent } from './update-bill-modal.component';

describe('ModalComponent', () => {
  let component: UpdateBillModalComponent;
  let fixture: ComponentFixture<UpdateBillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBillModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
