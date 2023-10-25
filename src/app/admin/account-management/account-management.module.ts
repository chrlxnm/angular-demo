import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserGroupComponent } from './user-group/user-group.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'user-group', component: UserGroupComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    UsersComponent,
    UserGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule
  ]
})
export class AccountManagementModule { }
