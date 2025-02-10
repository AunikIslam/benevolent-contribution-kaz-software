import { Member } from "./member";
import { Rule } from "./rule";

export class Contribution {
    id: string;
    contrbutedBy: Member;
    rule: Rule;
    amount: number;
}