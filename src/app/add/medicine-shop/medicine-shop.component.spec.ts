import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineShopComponent } from './medicine-shop.component';

describe('MedicineShopComponent', () => {
  let component: MedicineShopComponent;
  let fixture: ComponentFixture<MedicineShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
