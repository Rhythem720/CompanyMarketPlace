import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [  
    { title: 'Item 1', subtitle: 'Subtitle 1', description: 'Description of Item 1' },  
    { title: 'Item 2', subtitle: 'Subtitle 2', description: 'Description of Item 2' },  
    { title: 'Item 3', subtitle: 'Subtitle 3', description: 'Description of Item 3' }  
    // Add more items as needed  
  ];  
}
