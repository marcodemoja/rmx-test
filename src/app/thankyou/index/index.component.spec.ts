import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalDataService } from 'src/app/core/services/personal-data.service';
import { RouterModule, Router } from '@angular/router';

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
        PersonalDataService,
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
