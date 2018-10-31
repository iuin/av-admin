import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from '../layout/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';

const routes: Routes = [
    {
        path: '',
        component : LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
            { path: 'dashboard/monitor', component: DashboardMonitorComponent },
            { path: 'list', loadChildren: './list/list.module#ListModule' },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ],
    providers: [],
})
export class RouteRoutingModule {}
