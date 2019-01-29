import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDataFormComponent } from './personal-data-form.component';
import { AutocompleteJobsComponent } from '../autocomplete-jobs/autocomplete-jobs.component';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { OccupationService } from 'src/app/core/services/occupation.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRedux } from '@angular-redux/store';

const router = {};
const formBuilder: FormBuilder = new FormBuilder();

describe('PersonalDataFormComponent', () => {
  let component: PersonalDataFormComponent;
  let fixture: ComponentFixture<PersonalDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
      ],
      declarations: [PersonalDataFormComponent, AutocompleteJobsComponent],
      providers: [
        NgRedux,
        { provide: Router, useValue: router},
        { provide: FormBuilder, useValue: formBuilder},
        { provide: OccupationService, useClass: class { search = jasmine.createSpy('search'); } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
