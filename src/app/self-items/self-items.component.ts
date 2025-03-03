import { Component, OnInit } from '@angular/core';
import { SelfItemsService } from './items service/self-items.service';
import { HomeserviceService } from '../home/home service/homeservice.service';

interface Item {  
  itemName: string;  
  itemUrl: string|"";  
  itemDescription: string;  
  amount:number;
  itemType:string;
  username:string| null;
}  
@Component({
  selector: 'app-self-items',
  templateUrl: './self-items.component.html',
  styleUrls: ['./self-items.component.css']
})
export class SelfItemsComponent implements OnInit{
  items: Item[] = [];  
  useritems :Item[]=[];
  newItem: Item = { itemName: '', itemUrl: '', itemDescription: '' ,amount:0 ,itemType:'',username:''};  
  editMode: boolean = false;  
  editIndex: number = -1;  
 
  constructor(private itemservice : SelfItemsService,private homeService :HomeserviceService){}
  ngOnInit(): void {
    debugger
     //loading the items for the current users
      this.loadItems();
  }
  
  loadItems() :void { 
    //getting the current logged in user
    const currentuser=localStorage.getItem("currentuser");
     const localdata = this.homeService.getItems();
     if(localdata.length!=0)
     {
      debugger
        this.items = localdata;
        this.useritems= this.items.filter(x=>x.username==currentuser);
     }
     else{
  
        this.homeService.fetchItems().subscribe((res:any) => {
          debugger    
          this.homeService.storeItems(res);
          this.items= this.homeService.getItems()
          this.useritems= this.items.filter(x=>x.username==currentuser)
          
        });
      }
    }

    //adding the item by the user
  addItem() {  
    debugger
    if (this.editMode) {  
      this.useritems[this.editIndex] = { ...this.newItem };  
      this.editMode = false;  
      
    // Replace the old item with the updated item  
    const itemIndex = this.items.findIndex(item => item.itemName == this.newItem.itemName);  

    this.items[itemIndex] = this.newItem;  

    // Save the updated items array back to local storage  
      this.itemservice.storeItems(this.items);
    } 
    else {  
      this.newItem.username = localStorage.getItem("currentuser"); // Simulate getting the current user  
      this.newItem.itemType="SELL";
      this.useritems.push({ ...this.newItem });  
      this.items.push({...this.newItem});
      this.itemservice.storeItems(this.items);
    }  
    this.resetForm();  
  }  

  editItem(index: number) {  
    this.editMode = true;  
    this.editIndex = index;  
    this.newItem = { ...this.useritems[index] };  
  }  

  
deleteItem(index: number) {  
  const useritem = this.useritems[index]
  this.useritems.splice(index, 1);  
  this.items = this.items.filter(x=>x.itemName != useritem.itemName);
  this.itemservice.storeItems(this.items);
  this.loadItems();
}  

//reseting the Add details form
resetForm() {  
  this.newItem = {  itemName: '',itemUrl:'', itemDescription: '',itemType:'',amount:0,username:'' };  
}  
}