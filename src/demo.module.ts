import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LibraryModule } from 'projects/library/public_api';

import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoNavComponent } from './demo-home/demo-nav.component';
import { DemoProfileComponent } from './demo-home/demo-profile.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoLoadingComponent } from './demo-loading/demo-loading.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DemoChartComponent } from './demo-charts/demo-chart.component';
import { DemoBubbleChartComponent } from './demo-charts/demo-bubble.component';
import { DemoDataTableComponent } from './demo-datatable/demo-datatable.component';
import { DemoDropzoneComponent } from './demo-dropzone/demo-dropzone.component';

import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryModule,
    DemoRoutingModule
  ],
  declarations: [
    DemoHomeComponent, DemoNavComponent, DemoProfileComponent, DemoFormsComponent, DemoLoadingComponent,
    DemoLoginComponent, DemoChartComponent, DemoBubbleChartComponent, DemoDataTableComponent,
    DemoDropzoneComponent
  ],
  exports: []
})
export class DemoModule { }
