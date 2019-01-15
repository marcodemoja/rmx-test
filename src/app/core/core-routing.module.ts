import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'enter',
        pathMatch: 'full'
    },
    {
        path: 'thankyou',
        loadChildren: '../thankyou/thankyou.module#ThankyouModule'
    },
    {
        path: 'enter',
        loadChildren: '../enter/enter.module#EnterModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
