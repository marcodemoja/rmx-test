import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataFormComponent } from './personal-data-form/personal-data-form.component';
import { EnterRoutingModule } from './enter-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EnterRoutingModule,
    SharedModule
  ],
  declarations: [PersonalDataFormComponent]
})
export class EnterModule { }
