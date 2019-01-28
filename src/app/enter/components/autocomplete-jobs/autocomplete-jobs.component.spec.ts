import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteJobsComponent } from './autocomplete-jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OccupationService } from 'src/app/core/services/occupation.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const formBuilder = new FormBuilder();

describe('AutocompleteJobsComponent', () => {
  let component: AutocompleteJobsComponent;
  let fixture: ComponentFixture<AutocompleteJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      declarations: [ AutocompleteJobsComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder},
        OccupationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
