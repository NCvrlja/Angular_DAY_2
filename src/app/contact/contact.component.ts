import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  info = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    text: new FormControl(''),
  });
  onSubmit(){if(this.info.valid){
    console.log(this.info.value);
    alert("We will contact you as soon as possible!")
    this.info.reset();}
    else {
      alert("Please fill out all the required fields")
    }
}}
