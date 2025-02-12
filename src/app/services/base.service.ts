import { Injectable } from "@angular/core";
import { Team } from "../dto/team";
import { Member } from "../dto/member";
import { ContributionReason } from "../dto/contribution-reason";
import { Contribution } from "../dto/contribution";
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

    updateTeamLead(pMember: Member): void {
        const teams = this.getTeams();
        for(let i = 0; i < teams.length; i++) {
            if(teams[i].id == pMember.team.id) {
                teams[i].teamLead = {
                    id: pMember.id,
                    name: pMember.name
                };
            }
        }
        localStorage.setItem('teams', JSON.stringify(teams));
    }

    getMembers(): Member[] {
        return localStorage.getItem('members') ? JSON.parse(localStorage.getItem('members')) : [];
    }

    saveMember(pMember: Member): void {
        const members: Member[] = this.getMembers();
        members.push(pMember);
        localStorage.setItem('members', JSON.stringify(members));
        if(pMember.isTeamLead) {
            this.updateTeamLead(pMember);
        }
    }

    getContribution(): Contribution[] {
        return localStorage.getItem('contributions') ? JSON.parse(localStorage.getItem('contributions')) : [];
    }

    saveContributions(pContribution: Contribution): void {
        const contributions: Contribution[] = this.getContribution();
        contributions.push(pContribution);
        localStorage.setItem('contributions', JSON.stringify(contributions));
    }

    getContributionReasons(): ContributionReason[] {
        return localStorage.getItem('contributionReasons') ? JSON.parse(localStorage.getItem('contributionReasons')) : [];
    }

    saveContributionReason(pReason: ContributionReason): void {
        const reasons: ContributionReason[] = this.getContributionReasons();
        reasons.push(pReason);
        localStorage.setItem('contributionReasons', JSON.stringify(reasons));
    }
}