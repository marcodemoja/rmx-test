import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Validator } from '@angular/forms';
import { PersonalData } from '../../shared/models/personal-data.model';


@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {

  form: FormGroup;
  addressGroup: FormGroup;
  titleCtrl: FormControl;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  emailCtrl: FormControl;
  countryCtrl: FormControl;
  postCodeCtrl: FormControl;
  occupationCtrl: FormControl;


  titles = [{label: 'Mr', value: 'mr'}, {label: 'Ms', value: 'ms'}];

  countries = [{label: 'United Kingdom', value: 'uk'}, {label: 'Ireland', value: 'ie'}];

  personalDataFormValidator: Validator;

  addressGroupValidator: Validator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();

    this.form.get('lastName').disable();

    this.form.get('firstName').valueChanges.subscribe((data) => {
      const lastName = this.form.get('lastName');
      const firstName = this.form.get('firstName');

      return firstName.value !== '' ? lastName.enable() : ( lastName.disable());
    });

    this.addressGroup.get('country').valueChanges.subscribe((data) => {
      switch (data) {
        case 'uk':
          this.addressGroup.get('postCode').reset();
          this.addressGroup.get('postCode').setValidators([
            Validators.pattern('^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$'),
            Validators.required]);
          break;
        case 'ie':
          this.addressGroup.get('postCode').reset();
          this.addressGroup.get('postCode').setValidators([Validators.pattern('^[a-zA-z0-9]{6,10}$')]);
          break;
      }
    });

  }

  initFieldControls() {
    this.titleCtrl      = this.fb.control('', [Validators.required]);
    this.firstNameCtrl  = this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastNameCtrl   = this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
    this.emailCtrl      = this.fb.control('', [Validators.email]);
    this.postCodeCtrl   = this.fb.control('');
    this.countryCtrl    = this.fb.control('', [Validators.required]);
    this.occupationCtrl = this.fb.control('');

    this.addressGroup = this.fb.group({
      postCode: this.postCodeCtrl,
      country: this.countryCtrl
    }, { validator: this.addressGroupValidator });

  }

  buildForm() {
    this.initFieldControls();

    this.form = this.fb.group({
      title:        this.titleCtrl,
      firstName:    this.firstNameCtrl,
      lastName:     this.lastNameCtrl,
      email:        this.emailCtrl,
      occupation:   this.occupationCtrl,
      address:      this.addressGroup
    },
    { validator: this.personalDataFormValidator});

  }

  onSubmit(value: any) {
    console.log(value);
  }

  get f() { return this.form.controls; }

}
