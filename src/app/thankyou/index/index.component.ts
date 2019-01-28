import { Component, OnInit } from '@angular/core';
import { IPersonalData } from 'src/app/core/interfaces/personal-data';
import { PersonalDataService } from 'src/app/core/services/personal-data.service';
import { Router } from '@angular/router';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data: IPersonalData;

  constructor(private personalDataService: PersonalDataService, private router: Router) { }

  ngOnInit() {

    this.personalDataService.currentData.pipe(
      tap(data => data),
      distinctUntilChanged()
    ).subscribe((data) => this.data = data);
    // console.log(this.data);

    if (!this.data.hasOwnProperty('fullname')) {
      this.router.navigateByUrl('enter');
    }
  }

}
