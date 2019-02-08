import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '~/@enoct/framework/core';
import { MaterialModule } from '~/@enoct/framework/material';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports     : [CommonModule, SharedModule, MaterialModule, MainRoutingModule]
})
export class MainModule {}
