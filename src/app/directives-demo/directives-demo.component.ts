import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.sass']
})
export class DirectivesDemoComponent implements OnInit {
  validUser:boolean = false;
  students = [
    { name: 'Sayli', age: 20 },
    { name: 'Neha', age: 25 },
    { name: 'Pooja', age: 19 },
    { name: 'Reshma', age: 22 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
