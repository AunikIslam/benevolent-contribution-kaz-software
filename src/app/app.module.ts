import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module';
import { TeamListComponent } from './main/team/team-list/team-list.component';
import { MemberListComponent } from './main/member/member-list/member-list.component';
import { RulesAndPenaltiesListComponent } from './main/rules-and-penalties/rules-and-penalties-list/rules-and-penalties-list.component';
import { BenevolentContributionListComponent } from './main/benevolent-contribution/benevolent-contribution-list/benevolent-contribution-list.component';

const routes: Routes = [
  {
    path: 'team-list',
    component: TeamListComponent
  },
  {
    path: 'member-list',
    component: MemberListComponent
  },
  {
    path: 'rule-and-penalty-list',
    component: RulesAndPenaltiesListComponent
  },
  {
    path: 'benevolent-contribution-list',
    component: BenevolentContributionListComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }