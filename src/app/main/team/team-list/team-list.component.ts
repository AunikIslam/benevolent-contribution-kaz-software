import { Component, OnInit } from '@angular/core';
import { Team } from '../../../dto/team';
import { BaseService } from '../../../services/base.service';

@Component({
  selector: 'app-team-list',
  imports: [],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.teams = this.service.getTeams();
  }
}
