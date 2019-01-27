import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonalData } from '../../../core/models/personal-data.model';
import { PersonalDataService } from './../../../core/services/personal-data.service';


@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  personalData: PersonalData;

  @ViewChild('appJobAutocomplete')
  appJobAutocomplete;

  constructor(private fb: FormBuilder, private personalDataService: PersonalDataService, private router: Router) { }

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

  onSubmit(value) {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.personalDataService.setCurrentData(<PersonalData>value);
    this.router.navigateByUrl('/thankyou');

  }
}
