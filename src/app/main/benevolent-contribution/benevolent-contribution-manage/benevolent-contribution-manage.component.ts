import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Team } from '../../../dto/team';
import { Member } from '../../../dto/member';
import { Contribution } from '../../../dto/contribution';
import { BaseService } from '../../../services/base.service';
import { generateId } from '../../../../utilities';
import { ContributionReason } from '../../../dto/contribution-reason';

@Component({
  selector: 'app-benevolent-contribution-manage',
  imports: [SharedModule],
  templateUrl: './benevolent-contribution-manage.component.html',
  styleUrl: './benevolent-contribution-manage.component.css'
})
export class BenevolentContributionManageComponent {
  teams: Team[] = [];
  members: Member[] = [];
  reasons: ContributionReason[] = [];
  contribution = new Contribution();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    this.members = this.service.getMembers();
    this.reasons = this.service.getContributionReasons();
    const modal = document.getElementById('contributionManageWindow');
    modal.style.display = 'block';
  }

  closeContributionComponent(): void {
    this.reloadData.emit();
  }

  saveContribution(): void {
    this.contribution.id = generateId();
    console.log(this.contribution);
    this.service.saveContributions(this.contribution);
    this.reloadData.emit(true)
  }
}
