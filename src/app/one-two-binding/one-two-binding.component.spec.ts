import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTwoBindingComponent } from './one-two-binding.component';

describe('OneTwoBindingComponent', () => {
  let component: OneTwoBindingComponent;
  let fixture: ComponentFixture<OneTwoBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTwoBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTwoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
