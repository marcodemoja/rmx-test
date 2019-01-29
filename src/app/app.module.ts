import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        BrowserAnimationsModule,
        SharedModule,
        NgReduxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
