import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastNameFormGroupComponent } from './first-last-name-form-group.component';

describe('FirstLastNameFormGroupComponent', () => {
  let component: FirstLastNameFormGroupComponent;
  let fixture: ComponentFixture<FirstLastNameFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLastNameFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
