import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedshopComponent } from './addmedshop.component';

describe('AddmedshopComponent', () => {
  let component: AddmedshopComponent;
  let fixture: ComponentFixture<AddmedshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
