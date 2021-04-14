import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItem: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  ondeleteButtonClicked(item: BudgetItem){
    this.delete.emit;

  }
}
