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
  contributions: Contribution[] = []; // used to display benevolent contributions from users
  totalContribution = signal(0); // used to display total amount of contribution

  @ViewChild('contributionManageContainer', { read: ViewContainerRef }) contributionManageContainer: ViewContainerRef; // dynamic component to create contribution

  // injection of the service class
  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    // load contribution list
    this.reloadDataTable();
  }

  openContributionAddComponent(): void {
    // initiate the creation of contribution create component
    const componentRef = this.contributionManageContainer.createComponent(BenevolentContributionManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      // clear the component when contribution is created
      this.contributionManageContainer.clear();
    });
  }

  // load contribution list
  reloadDataTable(): void {
    this.contributions = this.service.getContribution();
    this.calculateTotalContribution();
  }

  // calculate total contribution amount
  calculateTotalContribution(): void {
    const contributionAmount = this.contributions.map(pItem => Number(pItem.contributionReason.amount));
    this.totalContribution.set(contributionAmount.reduce((acc, curr) => acc + curr, 0));
  }
}
