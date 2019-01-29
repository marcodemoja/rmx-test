import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { INITIAL_STATE } from 'src/app/store';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterModule
      ],
      declarations: [ IndexComponent ],
      providers: [
        { provide: INITIAL_STATE },
        { provide: NgRedux, useClass: class { getState = jasmine.createSpy('getState')} },
        { provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
