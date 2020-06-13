import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MupdateComponent } from './mupdate.component';

describe('MupdateComponent', () => {
  let component: MupdateComponent;
  let fixture: ComponentFixture<MupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
