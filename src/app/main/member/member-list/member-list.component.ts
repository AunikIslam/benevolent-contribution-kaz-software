import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { BaseService } from '../../../services/base.service';
import { Member } from '../../../dto/member';
import { MemberManageComponent } from '../member-manage/member-manage.component';

@Component({
  selector: 'app-member-list',
  imports: [SharedModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  members: Member[] = [];

  @ViewChild('memberManageContainer', { read: ViewContainerRef }) memberManageContainer: ViewContainerRef;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.reloadDataTable();
  }

  openTeamAddComponent(): void {
    const componentRef = this.memberManageContainer.createComponent(MemberManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      this.memberManageContainer.clear();
    });
  }

  reloadDataTable(): void {
    this.members = this.service.getMembers();
  }
}
