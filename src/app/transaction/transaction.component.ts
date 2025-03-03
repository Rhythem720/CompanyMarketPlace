import { Component } from '@angular/core';
import { TransactionService } from './transaction service/transactionservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactions:any = [];  

  constructor(private transactionService: TransactionService) {  
    this.transactions = this.transactionService.getTransactions();  
    
  }  
}
