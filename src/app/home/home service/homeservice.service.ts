import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  private itemsKey = 'homeItems';  
  private jsonUrl = 'assets/items.json'; 
  constructor(private http: HttpClient) {}  
 // Fetch items from JSON file  
  fetchItems(): Observable<any>  { 
  debugger
    return this.http.get(this.jsonUrl);  
  }  

    // Store items in local storage  

  storeItems(items: any[]): void {  
    localStorage.setItem(this.itemsKey, JSON.stringify(items));  
  } 

    // Retrieve items from local storage  

  getItems(): any[] {  
    const items = localStorage.getItem(this.itemsKey);  
    return items ? JSON.parse(items) : [];  
  }  

   purchaseItem(itemName: string): void {  
    // Get the current items  
    const items = this.getItems();  
    
      // Find the index of the item you want to update  
    const itemIndex = items.findIndex(item => item.itemName == itemName);  
   // const item = items.filter(x=>x.itemName==itemName);
debugger
    if (itemIndex !== -1) {  
      // Update the item properties 
      const updatedProperties = {  
        
        itemType: "BOUGHT",  
       
      };  

      const updatedItem = { ...items[itemIndex], ...updatedProperties };  

      // Replace the old item with the updated item  
      items[itemIndex] = updatedItem;  

      // Save the updated items array back to local storage  
      this.storeItems(items);  
    } else {  
      console.error(`Item with name ${itemName} not found.`);  
    }  
  }  
//   updateitem (item):void{
//     const items = this.getItems();  
    
//     // Find the index of the item you want to update  
//   const itemIndex = items.findIndex(item => item.);  
//  // const item = items.filter(x=>x.itemName==itemName);
// debugger
//   if (itemIndex !== -1) {  
//     // Update the item properties 
//     const updatedProperties = {  
      
//       itemType: "BOUGHT",  
     
//     };  

//     const updatedItem = { ...items[itemIndex], ...updatedProperties };  

//     // Replace the old item with the updated item  
//     items[itemIndex] = updatedItem;  

//     // Save the updated items array back to local storage  
//     this.storeItems(items);  
//   } else {  
//     console.error(`Item with name ${itemName} not found.`);  
//   }  

  }

