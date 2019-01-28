import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormGroupComponent } from './address-form-group.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const fb: FormBuilder = new FormBuilder();

describe('AddressFormGroupComponent', () => {
  let component: AddressFormGroupComponent;
  let fixture: ComponentFixture<AddressFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      declarations: [AddressFormGroupComponent],
      providers: [
        { provide: FormBuilder, useValue: fb}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormGroupComponent);
    component = fixture.componentInstance;

    component.group = fb.group({
      country: '',
      postCode: ''
    });


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
