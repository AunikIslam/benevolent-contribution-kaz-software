import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Member } from '../../../dto/member';
import { BaseService } from '../../../services/base.service';
import { Team } from '../../../dto/team';

@Component({
  selector: 'app-team-manage',
  imports: [SharedModule],
  templateUrl: './team-manage.component.html',
  styleUrl: './team-manage.component.scss'
})
export class TeamManageComponent implements OnInit {

  members: Member[] = [];
  team = new Team();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    this.members = this.service.getMembers();
    const modal = document.getElementById('teamManageWindow');
    modal.style.display = 'block';
  }
}
