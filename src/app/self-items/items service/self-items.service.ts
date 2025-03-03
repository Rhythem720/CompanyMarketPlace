import { Injectable } from '@angular/core';
import { HomeserviceService } from 'src/app/home/home service/homeservice.service';

@Injectable({
  providedIn: 'root'
})
export class SelfItemsService {

  constructor(private homeservice :HomeserviceService) { }
  //reusing the home service methods 
   getItems(){
    return this.homeservice.getItems();
   }
     storeItems(items: any[]): void {  
       this.homeservice.storeItems(items); 
    } 
}
