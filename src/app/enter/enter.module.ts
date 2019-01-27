import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { EnterRoutingModule } from './enter-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AutocompleteJobsComponent } from './components/autocomplete-jobs/autocomplete-jobs.component';

@NgModule({
  imports: [
    CommonModule,
    EnterRoutingModule,
    SharedModule
  ],
  declarations: [PersonalDataFormComponent, AutocompleteJobsComponent]
})
export class EnterModule { }
