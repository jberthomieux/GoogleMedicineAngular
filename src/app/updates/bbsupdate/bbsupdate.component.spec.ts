import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbsupdateComponent } from './bbsupdate.component';

describe('BbsupdateComponent', () => {
  let component: BbsupdateComponent;
  let fixture: ComponentFixture<BbsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
