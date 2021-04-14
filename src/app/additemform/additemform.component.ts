import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
})
export class AdditemformComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem( '',0);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
      console.log(form);
  }
}
