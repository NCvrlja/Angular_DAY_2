import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  cars: { type: string, model: string, color: string, img: any, price: number}[] = [{
    type: "Tesla",
    model: "x",
    color: "red",
    img: "/assets/1.jpg",
    price: 200
  },
  {
    type: "Fica",
    model: "x",
    color: "green",
    img: "/assets/2.jpg",
    price: 550
  },
  {
    type: "Car",
    model: "x",
    color: "black",
    img: "/assets/3.jpg",
    price: 450
  },
  {
    type: "Car",
    model: "x",
    color: "blue",
    img: "/assets/4.jpg",
    price: 140
  }
  ];


  another = new FormGroup({
    type: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  onSubmit(){
    if(this.another.valid){
      // console.log(this.another.value);
      let result: any = this.another.value;
      this.cars.push(result);
      this.another.reset();
    }
}
}
