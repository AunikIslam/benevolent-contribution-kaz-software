import { Member } from "./member";
import { ContributionReason } from "./contribution-reason";

export class Contribution {
    id: number;
    contributedBy: Member;
    contributionReason: ContributionReason;
    date =  new Date().toISOString().split('T')[0];
}