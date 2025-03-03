import { Component, OnInit } from '@angular/core';
import { SelfItemsService } from './items service/self-items.service';
import { HomeserviceService } from '../home/home service/homeservice.service';

interface Item {  
  itemName: string;  
  itemUrl: string;  
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
  // items: Item[] = [
  //   { itemid:1, itemName: 'Item 1', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:1000,itemType:"Buy".toUpperCase() ,username:"rhythem",},  
  //   { itemid:2,itemName: 'Item 2', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:2000,itemType:"Sell".toUpperCase() ,username:"rhythem",},  
  //   { itemid:3,itemName: 'Item 3', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:3000,itemType:"Sell".toUpperCase() ,username:"rhythem",},
  //   { itemid:4,itemName: 'Item 5', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:3000,itemType:"Sell".toUpperCase() ,username:"rhythem123",},    
  //   { itemid:5,itemName: 'Item 4', itemUrl: 'Subtitle 1', itemDescription: 'Description of Item 1',amount:4000,itemType:"Trade".toUpperCase() ,username:"rhythem",},  
  // ];  
  items: Item[] = [];  
  useritems :Item[]=[];
  newItem: Item = { itemName: '', itemUrl: '', itemDescription: '' ,amount:0 ,itemType:'',username:''};  
  editMode: boolean = false;  
  editIndex: number = -1;  
  // ngOnInit(): void {
  //   //const localdata = localStorage.getItem('signUpUsers');
  //  this.loadUserProducts();
  //   //fetch(this.url).then(res=>res.json()).then(json=>this.signupUsers=json);    
  // }
  // loadUserProducts() {
  //   this.items = 
  // }
  constructor(private itemservice : SelfItemsService,private homeService :HomeserviceService){}
  ngOnInit(): void {
    debugger
      // const items = this.itemservice.getItems();
      // const currentuser = localStorage.getItem("currentuser");
      // this.useritems= items.filter(x=>x.username==currentuser);
      this.loadItems();
  }
  
  loadItems() :void { 
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
  addItem() {  
    debugger
    if (this.editMode) {  
      this.useritems[this.editIndex] = { ...this.newItem };  
      //this.itemservice.storeItems()
      this.editMode = false;  
      
    // Replace the old item with the updated item  
    const itemIndex = this.items.findIndex(item => item.itemName == this.newItem.itemName);  

    this.items[itemIndex] = this.newItem;  

    // Save the updated items array back to local storage  
    //this.storeItems(items); 
      //this.useritems.push({ ...this.newItem });  
      //this.items.push({...this.newItem});
      this.itemservice.storeItems(this.items);
    } else {  
      //this.newItem.itemid = this.items.length ? Math.max(...this.items.map(i => i.itemid)) + 1 : 1;   
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
  this.items.splice(index, 1);  
}  

resetForm() {  
  this.newItem = {  itemName: '',itemUrl:'', itemDescription: '',itemType:'',amount:0,username:'' };  
}  
}