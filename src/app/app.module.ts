import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
