import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userList = [{
    name: "Harry",
    companyId: "XMCM001"
  },{
    name: "Maguire",
    companyId: "XMCM001"
  },{
    name: "Fernandes",
    companyId: "XMCM001"
  },
  ]
}
