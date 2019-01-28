import { SharedModule } from './../shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { PersonalDataService } from './services/personal-data.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { OccupationService } from './services/occupation.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule,
        HttpClientModule
    ],
    declarations: [SidebarComponent, HeaderComponent, LayoutComponent],
    providers: [PersonalDataService, OccupationService],
    exports: [
        RouterModule,
        HeaderComponent,
        SidebarComponent,
        LayoutComponent
    ]
})
export class CoreModule {

/*    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
          throw new Error(
            'CoreModule must be imported in AppModule only!');
        }
    }*/

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [PersonalDataService, OccupationService]
        };
    }
}
