import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillModalComponent } from './create-bill-modal.component';

describe('CreateBillModalComponent', () => {
  let component: CreateBillModalComponent;
  let fixture: ComponentFixture<CreateBillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBillModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
