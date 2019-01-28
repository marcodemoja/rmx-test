import { OccupationService } from './../../../core/services/occupation.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize, map, retryWhen } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { MatAutocomplete, MatOption } from '@angular/material';

@Component({
  selector: 'app-autocomplete-jobs',
  templateUrl: './autocomplete-jobs.component.html',
  styleUrls: ['./autocomplete-jobs.component.css']
})
export class AutocompleteJobsComponent implements OnInit {

  filteredJobs = [];
  JobsForm: FormGroup;
  isLoading = false;

  @ViewChild('autocomplete')
  autocomplete: MatAutocomplete;

  @Input()
  placeholder: string;

  @Output()
  optionSelected = new EventEmitter<string>();

  selectedValue = '';

  constructor(private fb: FormBuilder, private occupationService: OccupationService) {}

  ngOnInit() {
    this.JobsForm = this.fb.group({
      userInput: null
    });

    this.JobsForm.get('userInput').valueChanges
        .pipe(
          debounceTime(300),
          tap(() => this.isLoading = true),
          switchMap(value => ( value !== '' ? this.occupationService.search(value) : from([]))
          .pipe(
            retryWhen(errors => errors
              .pipe(
                tap(val => val)
              )),
            finalize(() => this.isLoading = false),
            )
          )
        )
        .subscribe((jobs) => {
          this.filteredJobs = jobs.map(x => x.suggestion);
        }, (error) => {
          // console.log(error);
          this.filteredJobs = [];
        });

    this.autocomplete.optionSelected.subscribe((data) => {
      console.log(data, 'data selected');
      this.selectedValue = data.option.value;
      this.optionSelected.emit(data.option.value);
    });
  }

  resetSelection() {
    this.JobsForm.get('userInput').setValue('');
    this.selectedValue = '';
  }

  displayFn(job: string) {
    if (job) { return job; }
  }

}
