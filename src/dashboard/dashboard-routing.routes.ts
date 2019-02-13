import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { ChangeLanguageComponent } from '~/@enoct/framework/i18n';

import { MainComponent } from "./layouts/basic/pages/main/main.component";
import { LoginPageComponent } from "./login/pages/login-page/login-page.component";

const routes: Routes = [
  {
    path       : 'login',
    component  : LoginPageComponent,
    canActivate: [MetaGuard],
    data       : {
      meta: {
        title: 'PUBLIC.LOGIN.PAGE_TITLE'
      }
    }
  },
  {
    path            : 'dashboard',
    component       : MainComponent,
    children        : [
      {
        path        : 'home',
        loadChildren: './main/main.module#MainModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data            : {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path     : 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path      : '**',
    redirectTo: '',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
