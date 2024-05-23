import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeLogsPageRoutingModule } from './time-logs-routing.module';

import { TimeLogsPage } from './time-logs.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeLogsPageRoutingModule,
    SharedModule
  ],
  declarations: [TimeLogsPage]
})
export class TimeLogsPageModule {}
