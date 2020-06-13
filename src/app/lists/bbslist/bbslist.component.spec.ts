import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbslistComponent } from './bbslist.component';

describe('BbslistComponent', () => {
  let component: BbslistComponent;
  let fixture: ComponentFixture<BbslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
