import { Member } from "./member";
type teamLead = Pick<Member, 'id' | 'name'>;
export class Team {
    id: number;
    name: string;
    teamLead: teamLead;
}