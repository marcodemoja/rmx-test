import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstLastNameFormGroupComponent } from './first-last-name-form-group.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('FirstLastNameFormGroupComponent', () => {
  let component: FirstLastNameFormGroupComponent;
  let fixture: ComponentFixture<FirstLastNameFormGroupComponent>;
  const fb: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      declarations: [ FirstLastNameFormGroupComponent ],
      providers: [
        { provide: FormBuilder, useValue: fb}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLastNameFormGroupComponent);
    component = fixture.componentInstance;

    component.group = fb.group({
      title: '',
      firstName: '',
      lastName: ''
    });

    fixture.detectChanges();

  });

  describe('fields validation check ========>', () => {
    it('firstName: should not be empty | should contain only letters', () => {
      const firstName = component.group.get('firstName');

      firstName.setValue('34234kll;"(');
      firstName.updateValueAndValidity();
      expect(firstName.hasError('pattern')).toBeTruthy();
      firstName.setValue('eeeeee');
      firstName.updateValueAndValidity();
      expect(firstName.valid).toBeTruthy();
      firstName.setValue('');
      firstName.updateValueAndValidity();
      expect(firstName.hasError('required')).toBeTruthy();
    });

    // tslint:disable-next-line:max-line-length
    it('lastName: should be disabled if firstName is empty | should be required if firstName is filled | should contain only letters if filled', () => {
      const firstName = component.group.get('firstName');
      const lastName = component.group.get('lastName');

      firstName.setValue('');
      firstName.updateValueAndValidity();
      lastName.updateValueAndValidity();

      expect(lastName.disabled).toBeTruthy();

      firstName.setValue('name');
      firstName.updateValueAndValidity();
      lastName.setValue('last name');
      lastName.updateValueAndValidity();

      expect(lastName.valid).toBeTruthy();
      expect(lastName.enabled).toBeTruthy();

      lastName.setValue('werw34.');
      lastName.updateValueAndValidity();

      expect(lastName.hasError('pattern')).toBeTruthy();

      lastName.setValue('');
      lastName.updateValueAndValidity();

      expect(lastName.hasError('required')).toBeTruthy();
    });

    it('title: should be required', () => {
      const title = component.group.get('title');

      title.setValue('');
      title.updateValueAndValidity();

      expect(title.hasError('required')).toBeTruthy();

    });

  });

});
