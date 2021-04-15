import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItem: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  ondeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);

  }

  onCardClicked(item: BudgetItem){
    //show edit mode
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      //check if result has a value 
      if (result){
          // replace the item with the updated/ submitted item from the form 
          //replace the old with the new updatet item
          this.budgetItem[this.budgetItem.indexOf(item)] = result; 
      }
    });
  }
}
