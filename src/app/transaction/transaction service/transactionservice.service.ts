import { Injectable } from '@angular/core';  

interface Transaction {  
  transactionid: number;  
  amount: number;  
  datetime: Date;  
  type: string; // e.g., "buy"  
  username: string;  
  itemName: string;  
  itemDescription: string;  
}  

@Injectable({  
  providedIn: 'root'  
})  
export class TransactionService {  
  private transactions: Transaction[] = [];  
  private transactionIdCounter = 1;  
  
  constructor() {}  

  //transaction made by the user
  addTransaction(transaction: Transaction) {  
    debugger
    
    transaction.transactionid = this.transactionIdCounter++;  
    const currentuser = localStorage.getItem("currentuser")
    transaction.username=   currentuser?currentuser:"" ;
    this.transactions.push(transaction); 
    localStorage.setItem("transactions",JSON.stringify(this.transactions));
  }  

  //Transactions for the logged in user
  getTransactions() {  
    const localdata = localStorage.getItem("transactions");
    const currentuser = localStorage.getItem("currentuser");
    if(localdata!=null)
    {
       this.transactions = JSON.parse(localdata);
       return this.transactions.filter(x=>x.username==currentuser);
    }
    else
     return this.transactions;
    
  }  
}  