import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankShopComponent } from './blood-bank-shop.component';

describe('BloodBankShopComponent', () => {
  let component: BloodBankShopComponent;
  let fixture: ComponentFixture<BloodBankShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
