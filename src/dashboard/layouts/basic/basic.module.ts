import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicRoutingModule } from './basic-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
