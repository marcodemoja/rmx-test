import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form-group',
  templateUrl: './address-form-group.component.html',
  styleUrls: ['./address-form-group.component.css']
})
export class AddressFormGroupComponent implements OnInit {

  @Input()
  group: FormGroup;

  countries = [{label: 'United Kingdom', value: 'uk'}, {label: 'Ireland', value: 'ie'}];

  constructor() { }


  ngOnInit() {
    const postCode = this.group.get('postCode');
    const country = this.group.get('country');

      country.setValidators([Validators.required]);

      country.valueChanges.subscribe((data) => {
          switch (data) {
            case 'uk':
              postCode.reset();
              postCode.setValidators([
                Validators.pattern('^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$'),
                Validators.required]);
                postCode.updateValueAndValidity();
              break;
            case 'ie':
              postCode.reset();
              postCode.setValidators([Validators.pattern('^[a-zA-z0-9]{6,10}$')]);
              postCode.updateValueAndValidity();
              break;
          }
        });
  }

}
