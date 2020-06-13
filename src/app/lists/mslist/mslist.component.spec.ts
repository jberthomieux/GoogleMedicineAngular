import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslistComponent } from './mslist.component';

describe('MslistComponent', () => {
  let component: MslistComponent;
  let fixture: ComponentFixture<MslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
