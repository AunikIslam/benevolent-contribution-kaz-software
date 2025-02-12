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
    this.members = this.service.getMembers(); // load member list
    this.reasons = this.service.getContributionReasons(); // load contribution reasons
    const modal = document.getElementById('contributionManageWindow'); // get contribution manage element
    modal.style.display = 'block';
  }

  closeContributionComponent(): void {
    this.reloadData.emit();
  }

  saveContribution(): void {
    this.contribution.id = generateId(); // assign unique id to contribution
    this.service.saveContributions(this.contribution); // call service class to save the contribution
    this.reloadData.emit(true); // initiate operation to perform on the parent component
  }
}
