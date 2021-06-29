import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateBillModalComponent } from './crate-bill-modal.component';

describe('CrateBillModalComponent', () => {
  let component: CrateBillModalComponent;
  let fixture: ComponentFixture<CrateBillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateBillModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateBillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
