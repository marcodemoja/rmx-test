import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'thankyou',
        loadChildren: '../thankyou/thankyou.module#ThankyouModule'
    },
    {
        path: 'enter',
        loadChildren: '../enter/enter.module#EnterModule'
    },
    {
        path: '',
        redirectTo: '/enter',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
