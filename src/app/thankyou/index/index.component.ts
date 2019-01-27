import { Component, OnInit } from '@angular/core';
import { PersonalData } from 'src/app/core/models/personal-data.model';
import { PersonalDataService } from 'src/app/core/services/personal-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data: PersonalData;

  constructor(private personalDataService: PersonalDataService, private router: Router) { }

  ngOnInit() {

    this.personalDataService.currentData.subscribe((data) => this.data = data);
    console.log(this.data);

    if (!this.data.hasOwnProperty('firstName')) {
      this.router.navigateByUrl('enter');
    }
  }

}
