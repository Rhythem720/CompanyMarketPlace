import { Component, Inject } from '@angular/core';  
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  
import { TransactionService } from '../transaction/transaction service/transactionservice.service';
import { HomeserviceService } from '../home/home service/homeservice.service';

@Component({  
  selector: 'app-confirm-purchase',  
  templateUrl: './confirm-purchase.component.html',  
  styleUrls: ['./confirm-purchase.component.css']  
})  
export class ConfirmPurchaseComponent {  
  constructor(  
    public dialogRef: MatDialogRef<ConfirmPurchaseComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: any,  
    private transactionService: TransactionService  ,
    private homeservice :HomeserviceService

  ) {}  

  onConfirm(): void {  
    const transaction = {  
      transactionid:0,
      amount: this.data.amount,  
      datetime: new Date(),  
      type: 'buy',  
      username: this.data.username,  
      itemName: this.data.itemName,  
      itemDescription: this.data.itemDescription  
    };  
    this.transactionService.addTransaction(transaction);  
    debugger
    this.dialogRef.close(true);  
  }  

  onCancel(): void {  
    this.dialogRef.close(false);  
  }  
}  