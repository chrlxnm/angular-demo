import { Component } from '@angular/core';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent {

  groupList = [
    {
    code: "GROUPLAJU001",
    name: "USERGROUP LAJU"
    },
    {
    code: "GROUP002",
    name: "USERGROUP LAJU"
    },
    {
    code: "GROUPfr001",
    name: "GROUP GI"
    },
  ]

}
