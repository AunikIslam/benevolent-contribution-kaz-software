import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { ContributionReason } from '../../../dto/contribution-reason';
import { BaseService } from '../../../services/base.service';
import { generateId } from '../../../../utilities';

@Component({
  selector: 'app-contribution-reason-manage',
  imports: [SharedModule],
  templateUrl: './contribution-reason-manage.component.html',
  styleUrl: './contribution-reason-manage.component.css'
})
export class ContributionReasonManageComponent {
  contributionReason = new ContributionReason();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    // open the manage window
    const modal = document.getElementById('reasonManageWindow');
    modal.style.display = 'block';
  }

  closeReasonComponent(): void {
    this.reloadData.emit();
  }

  saveReason(): void {
    this.contributionReason.id = generateId();
    this.service.saveContributionReason(this.contributionReason); // save contribution
    this.reloadData.emit(true);
  }
}
