import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalData } from './../models/personal-data.model';

@Injectable()
export class PersonalDataService {

  private dataSource = new BehaviorSubject(<PersonalData>{});

  currentData = this.dataSource.asObservable();

  constructor() { }

  setCurrentData(data: PersonalData) {
    this.dataSource.next(data);
  }

}
