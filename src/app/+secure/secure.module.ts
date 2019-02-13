import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '~/@enoct/framework/core';
import { MaterialModule } from '~/@enoct/framework/material';

import { SecureComponent } from './secure.component';
import { routes } from './secure.routes';

@NgModule({
  imports     : [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  declarations: [SecureComponent]
})
export class SecureModule {}
