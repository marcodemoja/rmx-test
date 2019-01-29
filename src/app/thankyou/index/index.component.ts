import { Component, OnInit } from '@angular/core';
import { IPersonalData } from 'src/app/interfaces/personal-data';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data: IPersonalData;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    const appState = this.ngRedux.getState();

    if (appState.personalData.fullname.firstName === '') {
      this.router.navigateByUrl('enter');
    } else {
      this.data = appState.personalData;
    }
  }

}
