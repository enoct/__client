import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicModule } from "./basic/basic.module";
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  declarations: [],
  imports     : [
    CommonModule,
    LayoutsRoutingModule,
    BasicModule
  ]
})
export class LayoutsModule {}
