import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-last-name-form-group',
  templateUrl: './first-last-name-form-group.component.html',
  styleUrls: ['./first-last-name-form-group.component.css']
})
export class FirstLastNameFormGroupComponent implements OnInit {

  @Input()
  formSubmitted = false;

  @Input()
  group: FormGroup;

  titles = [{label: 'Mr', value: 'mr'}, {label: 'Ms', value: 'ms'}];

  constructor() { }

  ngOnInit() {
    const lastName = this.group.get('lastName');
    const firstName = this.group.get('firstName');
    const title = this.group.get('title');

    firstName.setValidators([Validators.required, Validators.pattern('[a-zA-Z]*')])
    lastName.setValidators([Validators.required, Validators.pattern('[a-zA-Z ]*')]);
    title.setValidators([Validators.required]);

    firstName.updateValueAndValidity();
    lastName.updateValueAndValidity();
    title.updateValueAndValidity();


    // enable lastName field if first name is filled
    lastName.disable();

    firstName.valueChanges.subscribe((data) => {
      return ( firstName.value !== '' && !firstName.invalid ) ? lastName.enable() : lastName.disable();
    });
  }

}
