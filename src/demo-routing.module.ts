import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoLoadingComponent } from './demo-loading/demo-loading.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DemoChartComponent } from './demo-charts/demo-chart.component';
import { DemoBubbleChartComponent } from './demo-charts/demo-bubble.component';
import { DemoDataTableComponent } from './demo-datatable/demo-datatable.component';
import { DemoDropzoneComponent } from './demo-dropzone/demo-dropzone.component';

const routes: Routes = [
  {path: 'demo', component: DemoHomeComponent, children: [
    {path: 'forms', component: DemoFormsComponent},
    {path: 'loading', component: DemoLoadingComponent},
    {path: 'login', component: DemoLoginComponent},
    {path: 'chart', component: DemoChartComponent},
    {path: 'bubble', component: DemoBubbleChartComponent},
    {path: 'datatable', component: DemoDataTableComponent},
    {path: 'dropzone', component: DemoDropzoneComponent},
    {path: '**', redirectTo: 'forms'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
