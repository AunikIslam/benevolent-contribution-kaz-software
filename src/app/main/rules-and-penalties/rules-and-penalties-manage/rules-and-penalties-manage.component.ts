import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared-module';
import { Rule } from '../../../dto/rule';
import { BaseService } from '../../../services/base.service';
import { generateId } from '../../../../utilities';

@Component({
  selector: 'app-rules-and-penalties-manage',
  imports: [SharedModule],
  templateUrl: './rules-and-penalties-manage.component.html',
  styleUrl: './rules-and-penalties-manage.component.css'
})
export class RulesAndPenaltiesManageComponent {
  
  ruleAndPenalty = new Rule();
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    const modal = document.getElementById('ruleManageWindow');
    modal.style.display = 'block';
  }

  saveRuleAndPenalty(): void {
    this.ruleAndPenalty.id = generateId();
    this.service.saveRulesAndPenalties(this.ruleAndPenalty);
    this.reloadData.emit(true)
  }
}
