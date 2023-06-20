import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = "Rent"
  counter: number = 0;

  countClick(){
    this.counter = this.counter+10;
    }

}


