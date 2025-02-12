import { Component } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Contribution } from '../../../dto/contribution';
import { Filter, months } from '../../../../utilities';
import { BaseService } from '../../../services/base.service';
import { Member } from '../../../dto/member';
import { TopContributor } from '../../../dto/top-contributor';

@Component({
  selector: 'app-month-wise-contribution-receipt',
  imports: [SharedModule],
  templateUrl: './month-wise-contribution-receipt.component.html',
  styleUrl: './month-wise-contribution-receipt.component.css'
})
export class MonthWiseContributionReceiptComponent {
  monthWiseContributions: Contribution[] = [];
  months = months;
  years = ['2025', '2024', '2023', '2022', '2021'];
  totalContribution = 0;
  topContributors: TopContributor[] = [];
  userVsContributonMap: Map<number, number> = new Map();
  memberMap: Map<number, Member> = new Map();

  filter: Filter = {
    month: null,
    year: null
  }

  constructor(private service: BaseService) {
    
  }


  // filter out contributions of the selected month
  getMonthWiseContributions(pMonth: string, pYear: string): void {
    const contributions = this.service.getContribution();
    this.monthWiseContributions = [];
    contributions.forEach(pContribution => {
      const [year, month] = pContribution.date.split('-');
      if(year == pYear && month == pMonth) {
        this.monthWiseContributions.push(pContribution);
      }
    });
    // map only the amount
    const contributionAmountList: number[] = this.monthWiseContributions.map(pItem => Number(pItem.contributionReason.amount));
    // call 'calculateTotalContribution' function 
    this.calculateTotalContribution(contributionAmountList);
    // call 'getTopFiveContributors' function
    this.getTopFiveContributors();
  }

  // calculate contribution of the selected month
  calculateTotalContribution(pContributionList: number[]): void {
    this.totalContribution = pContributionList.reduce((acc, curr) => acc + curr, 0);
  }

  // get the members list and set it into a map
  getMembers(): void {
    const members = this.service.getMembers();
    if(members.length > 0 ) {
      members.forEach(pMember => {
        this.memberMap.set(pMember.id, pMember);
      })
    }
  }

  // find out top five contributors
  getTopFiveContributors(): void {
    this.getMembers();
    this.userVsContributonMap.clear();
    const contributors: TopContributor[] = [];

    if(this.monthWiseContributions.length > 0) {
      this.monthWiseContributions.forEach(pContribution => {
        const contribution = Number(pContribution.contributionReason.amount);
        if(this.userVsContributonMap.has(pContribution.contributedBy.id)) {
          const previousContribution = Number(this.userVsContributonMap.get(pContribution.contributedBy.id));
          this.userVsContributonMap.set(pContribution.contributedBy.id, contribution + previousContribution);
        } else {
          this.userVsContributonMap.set(pContribution.contributedBy.id, contribution);
        }
      });
    }
    
    // prepare the topContributors list to display top five contributors
    for (const key of this.userVsContributonMap.keys()) {
      const member = this.memberMap.get(key);
      const contribution = this.userVsContributonMap.get(key);
      contributors.push({member: member, amount: contribution});
    }
    this.topContributors = contributors.sort((one, two) => two.amount - one.amount).slice(0, 5)
  }

  // print monthly receipt
  downloadReceipt(): void {
    window.print();
  }
}
