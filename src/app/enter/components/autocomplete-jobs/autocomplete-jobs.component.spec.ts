import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteJobsComponent } from './autocomplete-jobs.component';

describe('AutocompleteJobsComponent', () => {
  let component: AutocompleteJobsComponent;
  let fixture: ComponentFixture<AutocompleteJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteJobsComponent ]
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
