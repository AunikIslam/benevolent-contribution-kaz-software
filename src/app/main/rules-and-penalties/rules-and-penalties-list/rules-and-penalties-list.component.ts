import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { RulesAndPenaltiesManageComponent } from '../rules-and-penalties-manage/rules-and-penalties-manage.component';
import { BaseService } from '../../../services/base.service';
import { Rule } from '../../../dto/contribution-reason';

@Component({
  selector: 'app-rules-and-penalties-list',
  imports: [SharedModule],
  templateUrl: './rules-and-penalties-list.component.html',
  styleUrl: './rules-and-penalties-list.component.css'
})
export class RulesAndPenaltiesListComponent {
  
  rulesAndPenalties: Rule[] = [];

  @ViewChild('ruleManageContainer', { read: ViewContainerRef }) ruleManageContainer: ViewContainerRef;

  constructor(private service: BaseService) {

  }

  ngOnInit(): void {
    this.reloadDataTable();
  }

  openRuleAddComponent(): void {
    const componentRef = this.ruleManageContainer.createComponent(RulesAndPenaltiesManageComponent);
    componentRef.instance.reloadData.subscribe(pData => {
      if(pData) {
        this.reloadDataTable();
      }
      this.ruleManageContainer.clear();
    });
  }

  reloadDataTable(): void {
    this.rulesAndPenalties = this.service.getRulesAndPenalties();
  }
}
