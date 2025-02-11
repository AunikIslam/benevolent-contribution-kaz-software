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

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.reloadDataTable();
  }

  openTeamAddComponent(): void {
    const componentRef = this.teamManageContainer.createComponent(TeamManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      this.teamManageContainer.clear();
    });
  }

  reloadDataTable(): void {
    this.teams = this.service.getTeams();
  }
}
