import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormGroupComponent } from './form-groups/address/address-form-group.component';
import { FirstLastNameFormGroupComponent } from './form-groups/first-last-name-form-group/first-last-name-form-group.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddressFormGroupComponent, FirstLastNameFormGroupComponent],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule, AddressFormGroupComponent, FirstLastNameFormGroupComponent]
})
export class SharedModule { }
