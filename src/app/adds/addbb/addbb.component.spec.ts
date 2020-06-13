import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbbComponent } from './addbb.component';

describe('AddbbComponent', () => {
  let component: AddbbComponent;
  let fixture: ComponentFixture<AddbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
