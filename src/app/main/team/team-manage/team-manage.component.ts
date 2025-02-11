import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Member } from '../../../dto/member';
import { BaseService } from '../../../services/base.service';
import { Team } from '../../../dto/team';
import { generateId } from '../../../../utilities';

@Component({
  selector: 'app-team-manage',
  imports: [SharedModule],
  templateUrl: './team-manage.component.html',
  styleUrl: './team-manage.component.scss'
})
export class TeamManageComponent implements OnInit {

  members: Member[] = [];
  teams: Team[] = [];
  team = new Team();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    this.members = this.service.getMembers();
    const modal = document.getElementById('teamManageWindow');
    modal.style.display = 'block';
  }

  saveTeam(): void {
    this.team.id = generateId();
    this.service.saveTeam(this.team);
    this.reloadData.emit(true);
  }
}
