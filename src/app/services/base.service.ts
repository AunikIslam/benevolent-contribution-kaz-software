import { Injectable } from "@angular/core";
import { Team } from "../dto/team";
import { Member } from "../dto/member";
@Injectable({ providedIn: 'root' })
export class BaseService {

    getTeams(): Team[] {
        return localStorage.getItem('teams') ? JSON.parse(localStorage.getItem('teams')) : [];
    }

    saveTeam(pTeam: Team): void {
        const teams: Team[] = this.getTeams();
        teams.push(pTeam);
        localStorage.setItem('teams', JSON.stringify(teams));
    }

    getMembers(): Member[] {
        return localStorage.getItem('members') ? JSON.parse(localStorage.getItem('members')) : [];
    }

    getContribution(): Member[] {
        return localStorage.getItem('contributions') ? JSON.parse(localStorage.getItem('contributions')) : [];
    }
}