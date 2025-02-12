import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { ContributionReason } from '../../../dto/contribution-reason';
import { BaseService } from '../../../services/base.service';
import { ContributionReasonManageComponent } from '../contribution-reason-manage/contribution-reason-manage.component';

@Component({
  selector: 'app-contribution-reason-list',
  imports: [SharedModule],
  templateUrl: './contribution-reason-list.component.html',
  styleUrl: './contribution-reason-list.component.css'
})
export class ContributionReasonListComponent {
  contributionReasons: ContributionReason[] = [];

  @ViewChild('reasonManageContainer', { read: ViewContainerRef }) reasonManageContainer: ViewContainerRef;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.reloadDataTable();
  }

  openReasonAddComponent(): void {
    const componentRef = this.reasonManageContainer.createComponent(ContributionReasonManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      this.reasonManageContainer.clear();
    });
  }

  reloadDataTable(): void {
    this.contributionReasons = this.service.getContributionReasons();
  }
}
