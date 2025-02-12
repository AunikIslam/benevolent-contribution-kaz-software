import { Component, ViewChild, ViewContainerRef, signal } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Contribution } from '../../../dto/contribution';
import { BaseService } from '../../../services/base.service';
import { BenevolentContributionManageComponent } from '../benevolent-contribution-manage/benevolent-contribution-manage.component';

@Component({
  selector: 'app-benevolent-contribution-list',
  imports: [SharedModule],
  templateUrl: './benevolent-contribution-list.component.html',
  styleUrl: './benevolent-contribution-list.component.css'
})
export class BenevolentContributionListComponent {
  contributions: Contribution[] = [];
  totalContribution = signal(0);

  @ViewChild('contributionManageContainer', { read: ViewContainerRef }) contributionManageContainer: ViewContainerRef;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.reloadDataTable();
  }

  openContributionAddComponent(): void {
    const componentRef = this.contributionManageContainer.createComponent(BenevolentContributionManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      this.contributionManageContainer.clear();
    });
  }

  reloadDataTable(): void {
    this.contributions = this.service.getContribution();
    this.calculateTotalContribution();
  }

  calculateTotalContribution(): void {
    const contributionAmount = this.contributions.map(pItem => Number(pItem.contributionReason.amount));
    this.totalContribution.set(contributionAmount.reduce((acc, curr) => acc + curr, 0));
  }
}
