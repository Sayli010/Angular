import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'This is two way data binding';
  heading = "Welcome to Angular!!!!"

  isDisabled = true;

  onSave(){
    console.log("test")
    this.isDisabled  = !this.isDisabled;
  }
  detectData(value){
    this.heading = value
  }
}
