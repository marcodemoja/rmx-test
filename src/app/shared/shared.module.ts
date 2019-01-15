import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFieldGroupComponent } from './components/address-field-group/address-field-group.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddressFieldGroupComponent],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
