import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ThankyouRoutingModule } from './thankyou-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ThankyouRoutingModule
  ],
  declarations: [IndexComponent],
})
export class ThankyouModule { }
