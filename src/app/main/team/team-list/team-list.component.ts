import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Team } from '../../../dto/team';
import { BaseService } from '../../../services/base.service';
import { TeamManageComponent } from '../team-manage/team-manage.component';

@Component({
  selector: 'app-team-list',
  imports: [],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  @ViewChild('teamManageContainer', { read: ViewContainerRef }) teamManageContainer: ViewContainerRef;
  teamManageComponentRef: ComponentRef<TeamManageComponent>;

  constructor(private service: BaseService, private viewContainer: ViewContainerRef) {

  }

  ngOnInit(): void {
    this.teams = this.service.getTeams();
  }

  openTeamAddComponent(): void {
    this.viewContainer.clear();
    this.viewContainer.createComponent(TeamManageComponent);
  }
}
