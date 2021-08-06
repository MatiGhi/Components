import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre = 'Matias';

  usuario = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }


  // onSubmit(){
  onSubmit(formulario: NgForm){
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
