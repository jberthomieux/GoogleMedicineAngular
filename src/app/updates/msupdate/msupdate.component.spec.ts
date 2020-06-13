import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsupdateComponent } from './msupdate.component';

describe('MsupdateComponent', () => {
  let component: MsupdateComponent;
  let fixture: ComponentFixture<MsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
