import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
})
export class AdditemformComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.item){
      //this means that an existing item object was passend into this component
      //therefore this is not a new item 
      this.isNewItem = false;
    }else {
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
  }

  onSubmit(form: NgForm){
      this.formSubmit.emit(form.value);
      form.reset();
  }
}
