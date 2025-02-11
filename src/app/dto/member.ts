import { Team } from "./team";

export class Member {
    id: number;
    name: string;
    team: Team;
    isTeamLead = false;
}