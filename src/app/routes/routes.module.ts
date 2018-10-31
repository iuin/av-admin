import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';

@NgModule({
    declarations: [DashboardComponent, DashboardMonitorComponent, DashboardAnalysisComponent],
    imports: [ SharedModule, RouteRoutingModule ],
    exports: [ RouteRoutingModule ],
    providers: [],
})
export class RoutesModule {}
