import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPersonalData } from './../interfaces/personal-data';

@Injectable()
export class PersonalDataService {

  private dataSource = new BehaviorSubject(<IPersonalData>{});

  currentData = this.dataSource.asObservable();

  constructor() { }

  setCurrentData(data: IPersonalData) {
    this.dataSource.next(data);
  }

}
