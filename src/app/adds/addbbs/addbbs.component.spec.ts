import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbbsComponent } from './addbbs.component';

describe('AddbbsComponent', () => {
  let component: AddbbsComponent;
  let fixture: ComponentFixture<AddbbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
