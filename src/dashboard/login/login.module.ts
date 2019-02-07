import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [CommonModule, LoginRoutingModule]
})
export class LoginModule {}
