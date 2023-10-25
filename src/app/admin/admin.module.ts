import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'account-management',
        loadChildren: () =>  import('./account-management/account-management.module').then(mod=> mod.AccountManagementModule)
      },
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
