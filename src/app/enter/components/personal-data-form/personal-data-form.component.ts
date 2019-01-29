import { UPDATE_PERSONAL_DATA } from 'src/app/actions/personal-data';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IPersonalData } from 'src/app/interfaces/personal-data';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';


@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {

  form: FormGroup;

  personalData: IPersonalData;

  @ViewChild('appJobAutocomplete')
  appJobAutocomplete;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      fullname: this.fb.group({
        title: '',
        firstName: '',
        lastName: ''
      }),
      email: this.fb.control('', [Validators.email]),
      occupation: '',
      address: this.fb.group({
        postCode: '',
        country: ''
      })
    });

  }

  validateFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
  }

  onSubmit(value) {
    if (this.form.invalid) {
      this.validateFormFields(this.form);
      return;
    } else {
      const data: IPersonalData = value;
      this.ngRedux.dispatch({type: UPDATE_PERSONAL_DATA, data});
      this.router.navigateByUrl('/thankyou');
    }
  }
}
