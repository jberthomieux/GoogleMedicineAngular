import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbupdateComponent } from './bbupdate.component';

describe('BbupdateComponent', () => {
  let component: BbupdateComponent;
  let fixture: ComponentFixture<BbupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
