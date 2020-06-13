import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BblistComponent } from './bblist.component';

describe('BblistComponent', () => {
  let component: BblistComponent;
  let fixture: ComponentFixture<BblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
