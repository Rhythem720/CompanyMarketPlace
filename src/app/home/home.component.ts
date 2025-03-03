import { Component, NgModule, OnInit } from '@angular/core';
 
import { ConfirmPurchaseComponent } from '../confirm-purchase/confirm-purchase.component';
import { MatDialog } from '@angular/material/dialog'; 
import { TransactionService } from '../transaction/transaction service/transactionservice.service';
import { HomeserviceService } from './home service/homeservice.service';

interface Item{
  itemName:string,
  itemUrl:string,
  itemDescription:string,
  amount:number,
  itemType:string,
  username:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: Item[] = [];  
  sellitems:Item[]=[];
  currentuser : string|null;
  term:any;
  // items = [  
  //   { itemName: 'Item 1', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:1000,itemType:"Buy".toUpperCase() ,username:"rhythem",},  
  //   { itemName: 'Item 2', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:2000,itemType:"Sell".toUpperCase() ,username:"rhythem",},  
  //   { itemName: 'Item 3', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:3000,itemType:"Sell".toUpperCase() ,username:"rhythem",},
  //   { itemName: 'Item 5', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:3000,itemType:"Sell".toUpperCase() ,username:"rhythem123",},    
  //   { itemName: 'Item 4', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:4000,itemType:"Trade".toUpperCase() ,username:"rhythem",},  
  // ];  
  //  sellitems:Item[]= this.items.filter(x=>x.itemType=='sell'.toUpperCase() && x.username!="rhythem123");
   constructor(public dialog: MatDialog,private transactionService: TransactionService,private homeService:HomeserviceService) {
    this.loadItems();
    this.currentuser =localStorage.getItem("currentuser");
   } 

   

  // loadItems() :void { 
  //   const currentuser=localStorage.getItem("currentuser");

  //    const localdata = this.homeService.getItems();
  //    if(localdata.length!=0)
  //    {
  //     debugger
  //       this.items = localdata;
  //       this.sellitems= this.items.filter(x=>x.itemType.toUpperCase()=="SELL" && x.username!=currentuser);

  //    }
  //    else{
  
  //       this.homeService.fetchItems().subscribe((res:any) => {
  //         debugger    
  //         this.homeService.storeItems(res);
  //         this.items= this.homeService.getItems()
  //         this.sellitems= this.items.filter(x=>x.itemType.toUpperCase()=="SELL" && x.username!=currentuser);
          
  //       });
  //     }
     
  // }
  loadItems():void{
    debugger
    this.homeService.fetchItems().subscribe((res:any) =>{
      this.items= res;
      this.sellitems= this.items.filter(x=>x.itemType.toUpperCase()=="SELL" && x.username!=this.currentuser);
    });
  }
    
  
   openBuyDialog(item: Item) {   
    const dialogRef = this.dialog.open(ConfirmPurchaseComponent, { 
      data : {   
          
        itemName: item.itemName,  
        itemDescription: item.itemDescription,  
        amount: item.amount,  
        username: item.username ,
      }  
    });  

    dialogRef.afterClosed().subscribe(result => {         
      if (result) {  
        debugger
        //this.sellitems = this.sellitems.filter(x=>x.itemName!=item.itemName)
         this.homeService.purchaseItem(item.itemName)
         const loadItems = this.homeService.getItems();
         if(loadItems.length!=0)
         {
          this.sellitems= loadItems.filter(x=>x.itemType.toUpperCase()=="SELL");
         }
         
        console.log('Purchase confirmed!');  
      }  
    });  
  }
}