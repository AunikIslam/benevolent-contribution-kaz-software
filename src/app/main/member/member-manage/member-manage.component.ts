import { Component, EventEmitter, Output } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { Member } from '../../../dto/member';
import { Team } from '../../../dto/team';
import { generateId } from '../../../../utilities';

@Component({
  selector: 'app-member-manage',
  imports: [],
  templateUrl: './member-manage.component.html',
  styleUrl: './member-manage.component.css'
})
export class MemberManageComponent {

  teams: Team[] = [];
  member = new Member();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    this.teams = this.service.getTeams();
    const modal = document.getElementById('memberManageWindow');
    modal.style.display = 'block';
  }

  saveTeam(): void {
    this.member.id = generateId();
    this.service.saveMember(this.member);
    this.reloadData.emit(true)
  }
}
