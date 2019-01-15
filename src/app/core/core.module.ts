import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule
    ],
    declarations: [SidebarComponent, HeaderComponent, LayoutComponent],
    exports: [
        RouterModule,
        HeaderComponent,
        SidebarComponent,
        LayoutComponent
    ],
    providers: [
    ]
})
export class CoreModule { }
